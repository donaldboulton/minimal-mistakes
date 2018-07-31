const express = require('express');
const webpush = require('web-push');

const publicVapidKey = process.env.BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU;
const privateVapidKey = process.env.ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc;

// Replace with your email
webpush.setVapidDetails('mailto:donaldboulton@gmail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);