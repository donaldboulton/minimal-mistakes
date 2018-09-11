const VERSION = '12';

this.addEventListener('install', (e) => {
    e.waitUntil(caches.open(VERSION).then(cache => cache.addAll([
        '/assets/js/main.min.js',
        '/assets/css/main.css',
        '/assets/js/vendor/bigfoot/bigfoot.min.js',
        '/manifest.webmanifest',
    ])));
});

this.addEventListener('fetch', (e) => {
    const tryInCachesFirst = caches.open(VERSION)
        .then(cache => cache.match(e.request).then((response) => {
            if (!response) {
                return handleNoCacheMatch(e);
            }
            fetchFromNetworkAndCache(e);

            return response;
        }));
    e.respondWith(tryInCachesFirst);
});

this.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then(keys => Promise.all(keys.map((key) => {
        if (key !== VERSION) { return caches.delete(key); }
    }))));
});

function fetchFromNetworkAndCache(e) {
    if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
    return fetch(e.request).then((res) => {
        if (!res.url) return res;
        if (new URL(res.url).origin !== location.origin) return res;
        return caches.open(VERSION).then((cache) => {
            cache.put(e.request, res.clone());
            return res;
        });
    }).catch(err => console.error(e.request.url, err));
}

function handleNoCacheMatch(e) {
    return fetchFromNetworkAndCache(e);
}

firebase.initializeApp({
  'messagingSenderId': '857761645811'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const fb_messaging = firebase.messaging();

// Buffer to save multipart messages
var messagesBuffer = {};

// Gets the number of keys in a dictionary
var countKeys = function (dic) {
  var count = 0;
  for (var i in dic) {
      count++;
  }
  return count;
};

// Parses the Realtime messages using multipart format
var parseRealtimeMessage = function (message) {
  // Multi part
  var regexPattern = /^(\w[^_]*)_{1}(\d*)-{1}(\d*)_{1}([\s\S.]*)$/;
  var match = regexPattern.exec(message);

  var messageId = null;
  var messageCurrentPart = 1;
  var messageTotalPart = 1;
  var lastPart = false;

  if (match && match.length > 0) {
      if (match[1]) {
          messageId = match[1];
      }
      if (match[2]) {
          messageCurrentPart = match[2];
      }
      if (match[3]) {
          messageTotalPart = match[3];
      }
      if (match[4]) {
          message = match[4];
      }
  }

  if (messageId) {
      if (!messagesBuffer[messageId]) {
          messagesBuffer[messageId] = {};
      }
      messagesBuffer[messageId][messageCurrentPart] = message;
      if (countKeys(messagesBuffer[messageId]) == messageTotalPart) {
          lastPart = true;
      }
  }
  else {
      lastPart = true;
  }

  if (lastPart) {
      if (messageId) {
          message = "";

          // Aggregate all parts
          for (var i = 1; i <= messageTotalPart; i++) {
              message += messagesBuffer[messageId][i];
              delete messagesBuffer[messageId][i];
          }

          delete messagesBuffer[messageId];
      }

      return message;
  } else {
    // We don't have yet all parts, we need to wait ...
    return null;
  }
}

// Shows a notification
function showNotification(message) {
  // In this example we are assuming the message is a simple string
  // containing the notification text. The target link of the notification
  // click is fixed, but in your use case you could send a JSON message with
  // a link property and use it in the click_url of the notification

  // The notification title
  const notificationTitle = 'Web Push Notification';

  // The notification properties
  const notificationOptions = {
    body: message,
    icon: 'assets/images/firebase-logo.png',
    data: {
      click_url: '/index.html'
    },
    tag: Date.now()
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
}

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
fb_messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);

  // Customize notification here
  if(payload.data && payload.data.M) {
    var message = parseRealtimeMessage(payload.data.M);
    return showNotification(message);
  }
});

// Forces a notification
self.addEventListener('message', function (evt) {
   evt.waitUntil(showNotification(evt.data));
});

// The user has clicked on the notification ...
self.addEventListener('notificationclick', function(event) {
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  if(event.notification.data && event.notification.data.click_url) {
    // gets the notitication click url
    var click_url = event.notification.data.click_url;

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == click_url && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow) {
        var url = click_url;
        return clients.openWindow(url);
      }

    }));
  }
});
