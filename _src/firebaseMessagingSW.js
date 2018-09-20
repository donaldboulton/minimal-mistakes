import firebase from 'firebase/app';
import 'firebase/messaging';

let config = {
  messagingSenderId: "857761645811"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = payload.notification.title;
  console.log('payload', payload.notification.icon);
  const options = {
     body: payload.notification.body,
     icon: payload.notification.icon
  }
  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  const promiseChain = clients
      .matchAll({
          type: "window",
          includeUncontrolled: true
       })
      .then(windowClients => {
          let matchingClient = null;
          for (let i = 0; i < windowClients.length; i++) {
              const windowClient = windowClients[i];
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
