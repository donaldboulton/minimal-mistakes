import webpush from 'webpush';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import Datastore from 'nedb';

webpush.setGCMAPIKey('AIzaSyAcWFi5XIFAY_L9Kkfh2fT46p_rFJyjDHA');

const vapidKeys = {
    publicKey: 'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU',
    privateKey: 'ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc',
};

webpush.setVapidDetails(
  'mailto:donaldboulton@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const db = new Datastore({
    filename: path.join(__dirname, 'public/subscription-store.db'),
    autoload: true
  });

  function saveSubscriptionToDatabase(subscription) {
    return new Promise(function(resolve, reject) {
      db.insert(subscription, function(err, newDoc) {
        if (err) {
          reject(err);
          return;
        }

        resolve(newDoc._id);
      });
    });
  };

  function getSubscriptionsFromDatabase() {
    return new Promise(function(resolve, reject) {
      db.find({}, function(err, docs) {
        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      })
    });
  }

  function deleteSubscriptionFromDatabase(subscriptionId) {
    return new Promise(function(resolve, reject) {
    db.remove({_id: subscriptionId }, {}, function(err) {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  const isValidSaveRequest = (req, res) => {
    // Check the request body has at least an endpoint.
    if (!req.body || !req.body.endpoint) {
      // Not a valid subscription.
      res.status(400);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        error: {
          id: 'no-endpoint',
          message: 'Subscription must have an endpoint.'
        }
      }));
      return false;
    }
    return true;
  };

  const app = express();
  app.use(express.static(path.join(__dirname, '/')));
  app.use(bodyParser.json());
  app.use(bodyParser.text());

  app.post('/api/save-subscription/', function (req, res) {

    if (!isValidSaveRequest(req, res)) {
      return;
    }

    return saveSubscriptionToDatabase(req.body)
    .then(function(subscriptionId) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ data: { success: true } }));
    })
    .catch(function(err) {
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

  app.post('/api/get-subscriptions/', function (req, res) {

    return getSubscriptionsFromDatabase()
    .then(function(subscriptions) {
      const reducedSubscriptions = subscriptions.map((subscription) => {
        return {
          id: subscription._id,
          endpoint: subscription.endpoint
        }
      });

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ data: { subscriptions: reducedSubscriptions } }));
    })
    .catch(function(err) {
      res.status(500);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        error: {
          id: 'unable-to-get-subscriptions',
          message: 'We were unable to get the subscriptions from our database.'
        }
      }));
    });
  });

  const triggerPushMsg = function(subscription, dataToSend) {
    return webpush.sendNotification(subscription, dataToSend)
    .catch((err) => {
      if (err.statusCode === 410) {
        return deleteSubscriptionFromDatabase(subscription._id);
      } else {
        console.log('Subscription is no longer valid: ', err);
      }
    });
  };

  app.post('/api/trigger-push-msg/', function (req, res) {

    const dataToSend = JSON.stringify(req.body);

    return getSubscriptionsFromDatabase()
    .then(function(subscriptions) {
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
    .catch(function(err) {
      res.status(500);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        error: {
          id: 'unable-to-send-messages',
          message: `We were unable to send messages to all subscriptions : ` +
            `'${err.message}'`
        }
      }));
    });

  });

  const port = process.env.PORT || 3000;

  const server = app.listen(port, function () {
    console.log('Running on http://localhost:' + port);
  });

var Worker = require("worker-loader?name=hash.worker.js!./worker");
var worker = new Worker();
worker.postMessage("pageB");
worker.onmessage = function(event) {
	var templatepageB = event.data; // "This text was generated by template pageB"
};
