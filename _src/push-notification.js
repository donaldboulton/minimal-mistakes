import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '857761645811'
  });

  navigator.serviceWorker
  .register('/service-worker.js')
  .then((registration) => {
    firebase.messaging().useServiceWorker(registration);
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
