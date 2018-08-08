const functions = require('firebase-functions');
const admin     = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.sendPostNotification = functions.database.ref('/posts/{postID}').onWrite(event => {

}

const postID    = event.params.postID,
      postTitle = event.data.val();

if (!postTitle) return console.log(`Post ${postID} deleted.`);

const getDeviceTokensPromise = admin.database()
  .ref('device_ids')
  .once('value')
  .then(snapshots => {

      if (!snapshots) return console.log('No devices to send to.');

}

const payload = {
  notification: {
    title: `New Article: ${postTitle}`,
    body: 'Click to read article.',
    icon: 'https://donboulton.com/assets/icons/bell-regular.svg'
  }
};

snapshots.forEach(childSnapshot => {
  const token = childSnapshot.val();

  admin.messaging().sendToDevice(token, payload).then(response => {
    // handle response
  }
};

response.results.forEach(result => {
  const error = result.error;

  if (error) {
    console.error('Failed delivery to', token, error)

  if (error.code === 'messaging/invalid-registration-token' ||
      error.code === 'messaging/registration-token-not-registered') {

      childSnapshot.ref.remove()
      console.info('Was removed:', token)

  } else {
    console.info('Notification sent to', token)
  }

}

response.results.forEach(result => {
  const error = result.error;

  if (error) {
    console.error('Failed delivery to', token, error);

  if (error.code === 'messaging/invalid-registration-token' ||
      error.code === 'messaging/registration-token-not-registered') {

      childSnapshot.ref.remove();
      console.info('Was removed:', token);

  } else {
    console.info('Notification sent to', token);
  }

}