"use strict";

var firebase = require("firebase/app");
require("firebase/database");
require("firebase/messaging");

var getFirebaseMessagingObject = function getFirebaseMessagingObject() {
  var config = {
    apiKey: "AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE",
    authDomain: "airy-office-413.firebaseapp.com",
    databaseURL: "https://airy-office-413.firebaseio.com",
    projectId: "airy-office-413",
    storageBucket: "airy-office-413.appspot.com",
    messagingSenderId: "857761645811",
    serverKey:
      "AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A"
  };
  firebase.initializeApp(config);
};

var messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  var title = payload.notification.title;
  console.log("payload", payload.notification.icon);
  var options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event) {
  var clickedNotification = event.notification;
  clickedNotification.close();
  var promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(function(windowClients) {
      var matchingClient = null;
      for (var i = 0; i < windowClients.length; i++) {
        var windowClient = windowClients[i];
        if (windowClient.url === feClickAction) {
          matchingClient = windowClient;
          break;
        }
      }
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(feClickAction);
      }
    });
  event.waitUntil(promiseChain);
});
