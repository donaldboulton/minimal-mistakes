const firebaseApp = require('firebase-app');
const firebaseMessaging = require('firebase-messaging');

const getFirebaseMessagingObject = () => {
  const config = {
    apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
    authDomain: 'airy-office-413.firebaseapp.com',
    databaseURL: 'https://airy-office-413.firebaseio.com',
    projectId: 'airy-office-413',
    storageBucket: 'airy-office-413.appspot.com',
    messagingSenderId: '857761645811',
    serverKey: "AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A",
  };
  firebase.initializeApp(config); 
};

export function initializePush() {
   const messaging = firebase.messaging();
   messaging
      .requestPermission()
      .then(() => {
         console.log("Have Permission");
         return messaging.getToken();
       })
      .then(token => {
         console.log("FCM Token:", token);
         //you probably want to send your new found FCM token to the
         //application server so that they can send any push
         //notification to you.
       })
      .catch(error => {
         if (error.code === "messaging/permission-blocked") {
            console.log("Please Unblock Notification Request Manually");
         } else {
            console.log("Error Occurred", error);
         }
        });
        messaging.onMessage(payload => {
          console.log("Notification Received", payload);
          //this is the function that gets triggered when you receive a 
          //push notification while you’re on the page. So you can 
          //create a corresponding UI for you to have the push 
          //notification handled.
       });
}
