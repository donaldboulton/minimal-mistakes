const VERSION = '10';

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
        '/page2/',
        '/page3/',
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
        '/assets/images/icon.png',
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
        '/service-worker.js',
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

const adminPage = '/admin.html';

function openWindow(event) {
  /**** START notificationOpenWindow ****/
  const adminPage = '/admin.html';
  const promiseChain = clients.openWindow(adminPage);
  event.waitUntil(promiseChain);
  /**** END notificationOpenWindow ****/
}

function focusWindow(event) {
  /**** START notificationFocusWindow ****/
  /**** START urlToOpen ****/
  const urlToOpen = new URL(adminPage, self.location.origin).href;
  /**** END urlToOpen ****/

  /**** START clientsMatchAll ****/
  const promiseChain = clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
  /**** END clientsMatchAll ****/
  /**** START searchClients ****/
  .then((windowClients) => {
    let matchingClient = null;

    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i];
      if (windowClient.url === urlToOpen) {
        matchingClient = windowClient;
        break;
      }
    }

    if (matchingClient) {
      return matchingClient.focus();
    } else {
      return clients.openWindow(urlToOpen);
    }
  });
  /**** END searchClients ****/

  event.waitUntil(promiseChain);
  /**** END notificationFocusWindow ****/
}

function dataNotification(event) {
  /**** START printNotificationData ****/
  const notificationData = event.notification.data;
  console.log('');
  console.log('The data notification had the following parameters:');
  Object.keys(notificationData).forEach((key) => {
    console.log(`  ${key}: ${notificationData[key]}`);
  });
  console.log('');
  /**** END printNotificationData ****/
}

/**** START isClientFocused ****/
function isClientFocused() {
  return clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  })
  .then((windowClients) => {
    let clientIsFocused = false;

    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i];
      if (windowClient.focused) {
        clientIsFocused = true;
        break;
      }
    }

    return clientIsFocused;
  });
}
/**** END isClientFocused ****/

function demoMustShowNotificationCheck(event) {
  /**** START showNotificationRequired ****/
  const promiseChain = isClientFocused()
  .then((clientIsFocused) => {
    if (clientIsFocused) {
      console.log('Don\'t need to show a notification.');
      return;

    }

    // Client isn't focused, we need to show a notification.
    return self.registration.showNotification('Had to show a notification.');
  });

  event.waitUntil(promiseChain);
  /**** END showNotificationRequired ****/
}

function demoSendMessageToPage(event) {
  /**** START sendPageMessage ****/
  const promiseChain = isClientFocused()
  .then((clientIsFocused) => {
    if (clientIsFocused) {
      windowClients.forEach((windowClient) => {
        windowClient.postMessage({
          message: 'Received a push message.',
          time: new Date().toString()
        });
      });
    } else {
      return self.registration.showNotification('No focused windows', {
        body: 'Had to show a notification instead of messaging each page.'
      });
    }
  });

  event.waitUntil(promiseChain);
  /**** END sendPageMessage ****/
}

self.addEventListener('push', function(event) {
  if (event.data) {
    switch(event.data.text()) {
      case 'must-show-notification':
        demoMustShowNotificationCheck(event);
        break;
      case 'send-message-to-page':
        demoSendMessageToPage(event);
        break;
      default:
        console.warn('Unsure of how to handle push event: ', event.data);
        break;
    }
  }
});

const notificationCloseAnalytics = () => {
  return Promise.resolve();
};

/**** START notificationCloseEvent ****/
self.addEventListener('notificationclose', function(event) {
  const dismissedNotification = event.notification;

  const promiseChain = notificationCloseAnalytics();
  event.waitUntil(promiseChain);
});
/**** END notificationCloseEvent ****/

self.addEventListener('message', function(event) {
  console.log('Received message from page.', event.data);
  switch(event.data) {
    case 'must-show-notification-demo':
      self.dispatchEvent(new PushEvent('push', {
        data: 'must-show-notification'
      }));
      break;
    case 'send-message-to-page-demo':
      self.dispatchEvent(new PushEvent('push', {
        data: 'send-message-to-page'
      }));
      break;
    default:
      console.warn('Unknown message received in service-worker.js');
      break;
  }
});

self.addEventListener('install', (event) => {
  event.waitUntil(skipWaiting());
}, false);

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
}, false);

self.addEventListener('push', (event) => {
  if (!event.data) {
      return;
  }

  const parsedData   = event.data.json();
  const notification = parsedData.notification;
  const title        = notification.title;
  const body         = notification.body;
  const icon         = notification.icon;
  const data         = parsedData.data;

  event.waitUntil(
      self.registration.showNotification(title, { body, icon, data })
  );
}, false);

self.addEventListener('notificationclick', (event) => {
  event.waitUntil(self.clients.openWindow(event.notification.data.url));
}, false);

const worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

worker.postMessage('Hello World');
