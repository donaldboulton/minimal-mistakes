const firebaseApp = require('firebase-app');
const firebaseMessaging = require('firebase-messaging');

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
