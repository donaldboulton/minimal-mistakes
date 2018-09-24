import { config } from "./firebaseConfig";
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/messaging';

firebase.initializeApp(config);

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
       });
}
