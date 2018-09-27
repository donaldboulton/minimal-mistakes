import { config } from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";

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
