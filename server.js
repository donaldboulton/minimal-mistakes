'use strict';

const webpush = require('web-push');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const workway = require('workway/node');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();
const database = admin.database().ref('/items');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from a Severless Database!");
});

exports.addItem = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    console.log(req.body)

    const item = req.body.item

    database.push({ item });

    let items = [];

    return database.on('value', (snapshot) => {
      snapshot.forEach((item) => {
        items.push({
          id: item.key,
          items: item.val().item
        });
      });

      res.status(200).json(items)
    }, (error) => {
      res.status(error.code).json({
        message: `Something went wrong. ${error.message}`
      })
    })
  })
})

const hostname = 'https://donboulton.com';
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return next();
});

const vapidKeys = {
    publicKey: 'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU',
    privateKey: 'ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc',
};

webpush.setGCMAPIKey('AIzaSyAcWFi5XIFAY_L9Kkfh2fT46p_rFJyjDHA');
webpush.setVapidDetails(
  'mailto:donaldboulton@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const db = new Datastore({ filename: 'subscription-store.db', autoload: true });

function saveSubscriptionToDatabase(subscription) {
    return new Promise(((resolve, reject) => {
        db.insert(subscription, (err, newDoc) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(newDoc._id);
        });
    }));
}

function getSubscriptionsFromDatabase() {
    return new Promise(((resolve, reject) => {
        db.find({}, (err, docs) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(docs);
        });
    }));
}

const isValidSaveRequest = (req, res) => {
    if (!req.body || !req.body.endpoint) {
        res.status(400);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            error: {
                id: 'no-endpoint',
                message: 'Subscription must have an endpoint.',
            },
        }));
        return false;
    }
    return true;
};

app.post('/api/save-subscription/', (req, res) => {

    if (!isValidSaveRequest(req, res)) {
        return;
    }

    return saveSubscriptionToDatabase(req.body)
        .then((subscriptionId) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: { success: true } }));
        })
        .catch((err) => {
            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                error: {
                    id: 'unable-to-save-subscription',
                    message: 'The subscription was received but we were unable to save it to our database.'
                }
            }));
        });
});

app.post('/api/get-subscriptions/',

    (req, res) => {
        return getSubscriptionsFromDatabase()
            .then((subscriptions) => {
                const reducedSubscriptions = subscriptions.map((subscription) => {
                    return {
                        id: subscription._id,
                        endpoint: subscription.endpoint,
                    };
                });

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ data: { subscriptions: reducedSubscriptions } }));
            })
            .catch((err) => {
                res.status(500);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    error: {
                        id: 'unable-to-get-subscriptions',
                        message: 'We were unable to get the subscriptions from our database.',
                    },
                }));
            });
    });

const triggerPushMsg = function (subscription, dataToSend) {
    return webpush.sendNotification(subscription, dataToSend)
        .catch((err) => {
            if (err.statusCode === 410) {
                return deleteSubscriptionFromDatabase(subscription._id);
            }
            console.log('Subscription is no longer valid: ', err);

        });
};

app.post('/api/trigger-push-msg/', (req, res) => {

    const dataToSend = JSON.stringify(req.body);

    return getSubscriptionsFromDatabase()
        .then((subscriptions) => {
            let promiseChain = Promise.resolve();

            for (let i = 0; i < subscriptions.length; i++) {
                const subscription = subscriptions[i];
                promiseChain = promiseChain.then(() => {
                    return triggerPushMsg(subscription, dataToSend);
                });
            }

            return promiseChain;
        })

        .then(() => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: { success: true } }));
        })
        .catch((err) => {
            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                error: {
                    id: 'unable-to-send-messages',
                    message: `'We were unable to send messages to all subscriptions : ' + ' ${err.message}'`
                },
            }));
        });
});

const port = process.env.PORT || 9012;

const server = app.listen(port, () => {
    console.log('Running on https://localhost:' + port);
});


