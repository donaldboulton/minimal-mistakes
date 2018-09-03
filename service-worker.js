const VERSION = '12';

this.addEventListener('install', (e) => {
    e.waitUntil(caches.open(VERSION).then(cache => cache.addAll([
        '/assets/js/main.min.js',
        '/assets/css/main.css',
        '/amp-html/2017-04-11-post-Social-Sharing.html',
        '/amp-html/2018-02-22-post-Letter-Avatar.html',
        '/amp-html/2018-02-22-post-SQL-Fragmentation.html',
        '/amp-html/2018-02-25-post-Defrag-SQL.html',
        '/amp-html/2018-02-25-post-Mobile-Colorbox.html',
        '/amp-html/2018-02-26-post-Windows-Tweaks.html',
        '/amp-html/2018-02-26-post-Jekyll-Admin.html',
        '/amp-html/2018-02-29-post-gallery-external/',
        '/2018-02-26-post-Staticman-with-Gitlab.html',
        '/2018-03-26-post-Website-Tweaks.html',
        '/2018-05-14-post-Jekyll-Image-Gallery.html',
        '/2018-05-27-post-reviews-for-jekyll.html',
        '/2018-06-06-post-Drag-Drop-No-Spambots.html',
        '/404.html',
        '/500.html',
        '/about/',
        '/calendar/',
        '/photography/cat-gallery/',
        '/categories/',
        '/photography/charlottesville-va-gallery/',
        '/collection-archive/',
        '/contact/',
        '/photography/family-gallery/',
        '/photography/grand-canyon-gallery/',
        '/index.amp/',
        '/photography/',
        '/',
        '/month-archive/',
        '/offline/',
        '/photography/okc-gallery/',
        '/photography/old-cat-gallery/',
        '/page-archive/',
        '/photography/san-diego-gallery/',
        '/photography/san-francisco/',
        '/photography/santa-barbara-gallery/',
        '/sitemap/',
        '/photography/stray-cat-gallery/',
        '/photography/sulphur-ok-gallery/',
        '/support/',
        '/tags/',
        '/photography/tahoe-gallery/',
        '/terms.html',
        '/thanks/',
        '/photography/tucson-gallery/',
        '/photography/unsorted-gallery/',
        '/photography/us-fest-gallery/',
        '/year-archive/',
        '/post/2017-04-11-post-Social-Sharing/',
        '/post/2018-02-22-post-Letter-Avatar/',
        '/post/2018-02-22-post-SQL-Fragmentation/',
        '/posts/2018-02-25-post-Defrag-SQL/',
        '/post/2018-02-25-post-Mobile-Colorbox/',
        '/post/2018-02-29-post-gallery-external/',
        '/2018-06-06-post-Drag-Drop-No-Spambots.html',
        '/2018-05-27-post-reviews-for-jekyll.html',
        '/2018-05-14-post-Jekyll-Image-Gallery.html',
        '/gallerys/gallery-external/',
        '/2018-03-26-post-Website-Tweaks.html',
        '/2018-02-26-post-Staticman-with-Gitlab.html',
        '/2018-02-26-post-Jekyll-Admin.html',
        '/2018-02-26-post-Windows-Tweaks.html',
        '/2018-02-25-post-Defrag-SQL.html',
        '/2018-02-25-post-Mobile-Colorbox.html',
        '/2018-02-22-post-SQL-Fragmentation.html',
        '/2018-02-22-post-Letter-Avatar.html',
        '/2017-04-11-post-Social-Sharing.html',
        '/assets/js/vendor/letter-avatar/letter-avatar.js',
        '/assets/js/lunr/lunr.min.js',
        '/assets/js/lunr/lunr-store.js',
        '/assets/js/lunr/lunr-en.js',
        '/assets/js/github/github-widget.js',
        '/assets/images/bg10-min.png',
        '/assets/images/badge.png',
        '/assets/images/firebase-logo.png',
        '/assets/images/fav-icons/favicon-32x32.png',
        '/assets/images/pages/donald-boulton-100.jpg',
        '/assets/images/pages/reviews.jpg',
        '/assets/images/pages/digital_box_1400-compressor.jpg',
        '/assets/images/pages/stop-spam.jpg',
        '/assets/images/pages/jekyll-reversed.jpg',
        '/assets/photography/cat-gallery/einstine-1200.jpg',
        '/assets/images/pages/performance/speedtest_donboulton-1200.jpg',
        '/assets/images/pages/staticman-github-gitlab.png',
        '/assets/images/pages/staticman-github-gitlab-1200.png',
        '/assets/images/pages/staticman-github-gitlab-lq.png',
        '/assets/images/pages/staticman-github-gitlab-320.png',
        '/assets/images/pages/colorbox-html.jpg',
        '/assets/images/pages/colorbox-html-1200.jpg',
        '/assets/images/pages/colorbox-html-lq.jpg',
        '/assets/images/pages/colorbox-html-320.jpg',
        '/assets/images/pages/jekyll-admin-1200.jpg',
        '/assets/images/pages/windows-tweaks-1200.png',
        '/assets/images/pages/defrag-sql-2014-1200.png',
        '/assets/images/pages/letter-avatar-header-1200.png',
        '/assets/images/pages/social-sharing.jpg',
        '/assets/images/pages/defrag-sql-2014-1200.png',
        '/assets/images/pages/check_sql_fragmentation-1200.png',
        '/assets/images/pages/stop-spam-1200.jpg',
        '/assets/images/pages/reviews-1200.jpg',
        '/assets/images/pages/social-sharing-1200.jpg',
        '/assets/images/pages/jekyll-reversed-1200.jpg',
        '/assets/images/pages/stop-spam-320.jpg',
        '/assets/images/pages/jekyll-admin-320.jpg',
        '/assets/images/pages/windows-tweaks-320.png',
        '/assets/images/pages/defrag-sql-2014-320.png',
        '/assets/images/pages/letter-avatar-header-320.png',
        '/assets/images/pages/social-sharing-320.jpg',
        '/assets/images/pages/defrag-sql-2014-320.png',
        '/assets/images/pages/check_sql_fragmentation-320.png',
        '/assets/images/pages/reviews-320.jpg',
        '/assets/images/pages/social-sharing-320.jpg',
        '/assets/images/pages/jekyll-reversed-320.jpg',
        '/assets/images/pages/stop-spam-lq.jpg',
        '/assets/images/pages/jekyll-admin-lq.jpg',
        '/assets/images/pages/windows-tweaks-lq.png',
        '/assets/images/pages/defrag-sql-2014-lq.png',
        '/assets/images/pages/letter-avatar-header-lq.png',
        '/assets/images/pages/social-sharing-lq.jpg',
        '/assets/images/pages/defrag-sql-2014-lq.png',
        '/assets/images/pages/check_sql_fragmentation-lq.png',
        '/assets/images/pages/reviews-lq.jpg',
        '/assets/images/pages/social-sharing-lq.jpg',
        '/assets/images/pages/jekyll-reversed-lq.jpg',
        '/assets/icons/icons.svg',
        '/assets/images/pages/github-74-80.png',
        '/assets/images/pages/cf-logo-v-rgb-rev-239-80.png',
        '/assets/images/red-flask-32.png',
        '/assets/images/fav-icons/favicon.png',
        '/assets/js/staticman/staticman-reviews.js',
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
