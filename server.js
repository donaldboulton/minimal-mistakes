'use strict';

/**** START web-push-require ****/
const webpush = require('web-push');
/**** END web-push-require ****/
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');

const hostname = 'https://donboulton.com';

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

const db = new Datastore({
    filename: path.join(__dirname, 'subscription-store.db'),
    autoload: true
  });

  /**** START save-sub-function ****/
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
  /**** END save-sub-function ****/

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

  /**** START save-sub-api-validate ****/
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
  /**** END save-sub-api-validate ****/

  const app = express();
  app.use(express.static(path.join(__dirname, 'frontend')));
  app.use(bodyParser.json());
  app.use(bodyParser.text());

  // This is the API that receives a push subscription and saves it.
  /**** START save-sub-example ****/
  /**** START save-sub-api-post ****/
  app.post('/api/save-subscription/', function (req, res) {
  /**** END save-sub-api-post ****/
    if (!isValidSaveRequest(req, res)) {
      return;
    }

    /**** START save-sub-api-save-subscription ****/
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
    /**** END save-sub-api-save-subscription ****/
  });
  /**** END save-sub-example ****/

  app.post('/api/get-subscriptions/', function (req, res) {
    // TODO: This should be secured / not available publicly.
    //       this is for demo purposes only.

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

  /**** START trig-push-send-notification ****/
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
  /**** END trig-push-send-notification ****/

  /**** START trig-push-api-post ****/
  app.post('/api/trigger-push-msg/', function (req, res) {
  /**** END trig-push-api-post ****/
    // NOTE: This API endpoint should be secure (i.e. protected with a login
    // check OR not publicly available.)

    const dataToSend = JSON.stringify(req.body);

    /**** START trig-push-send-push ****/
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
    /**** END trig-push-send-push ****/
    /**** START trig-push-return-response ****/
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
    /**** END trig-push-return-response ****/
  });

  const port = process.env.PORT || 9012;

  const server = app.listen(port, function () {
    console.log('Running on http://localhost:' + port);
  });

var Worker = require("worker-loader?name=hash.worker.js!./worker");
var worker = new Worker();
worker.postMessage("b");
worker.onmessage = function(event) {
	var templateB = event.data; // "This text was generated by template B"
};

