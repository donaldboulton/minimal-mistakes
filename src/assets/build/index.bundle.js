'use strict';

const webpush = require('web-push');
const path = require('path');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const cors = require('cors')({ origin: true });

const hostname = 'https://donboulton.com';
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});

const bodies = [];

app.post('/api/webpush/register', (req, res) => {
    const body = req.body;

    bodies.push(body);

    res.status(200).set('Content-Type', 'application/json').send(JSON.stringify(body));
});

app.post('/api/webpush/subscribe', (req, res) => {
    const notification = {
        title : req.body['text-title'],
        body  : req.body['text-body'],
        icon  : req.body['url-icon']
    };

    const data =  {
        url : req.body['url-link']
    };

    Promise.all(bodies.map((body) => {
        return new Promise((resolve, reject) => {
            const options = {
                method  : 'POST',
                host    : 'fcm.googleapis.com',
                path    : '/fcm/send',
                headers : {
                    'Content-Type'  : 'application/json',
                    'Authorization' : 'key=`AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A`'
                }
            };

            const to = body.token;

            const content_available = true;

            https.request(options, (response) => {
                const data = [];

                response.on('data',  (chunk) => data.push(chunk));
                response.on('end',   ()      => resolve(JSON.parse(Buffer.concat(data).toString())));
                response.on('error', (error) => reject(error));
            }).end(JSON.stringify({ notification, data, to, content_available }));
        });
    })).then((result) => {
        res.status(200).set('Content-Type', 'application/json').send(JSON.stringify(result));
    }).catch((error) => {
        res.status(500).set('Content-Type', 'application/json').send(JSON.stringify(error));
    });
});

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

const worker = new Worker('worker.js');

worker.addEventListener('message', event => {
  console.log(event.data, 'Message from the worker!');
});
