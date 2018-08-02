const webpush = require('web-push');

// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys.publicKey);
// console.log(vapidKeys.privateKey);
// process.exit();

webpush.setVapidDetails(
    'mailto:donaldboulton@gmail.com',
    'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU',
    'ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc'
);

const subscription = {
    endpoint: null,
    keys: {
        p256dh: null,
        auth: null,
    },
};

const notification = JSON.stringify({
    title: 'What is Up',
    body: 'Hello World, DWB ;)',
    url: 'https://twitter.com/donboulton',
});

webpush.sendNotification(subscription, notification)
    .then(success => console.log(success))
    .catch(error => console.log(error));
