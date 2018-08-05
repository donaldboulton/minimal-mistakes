'use strict';

const APP_PREFIX = 'donboulton';
const VERSION = 'version_03';
const CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
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
    '/assets/js/vendor/twitter/web-intents.js',
    '/assets/js/lunr/lunr.min.js',
    '/assets/js/lunr/lunr-store.js',
    '/assets/js/lunr/lunr-en.js',
    '/assets/js/github/github-widget.js',
    '/assets/images/bg10-min.png',
    '/assets/images/pages/bg10-min.png',
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
    '/assets/js/staticman/staticman-comments.js',
    '/assets/js/vendor/bigfoot/bigfoot.min.js',
    '/manifest.webmanifest',
];

self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url);
    e.respondWith(
      caches.match(e.request).then(function (request) {
          if (request) {
              console.log('responding with cache : ' + e.request.url);
              return request;
          } else {
              console.log('file is not cached, fetching : ' + e.request.url);
              return fetch(e.request)
          }
      })
    );
});

self.addEventListener('install', function (e) {
    e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME);
        return cache.addAll(URLS);
    })
  );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
    caches.keys().then(function (keyList) {

        const cacheWhitelist = keyList.filter(function (key) {
            return key.indexOf(APP_PREFIX);
        });

        cacheWhitelist.push(CACHE_NAME);

        return Promise.all(keyList.map(function (key, i) {
            if (cacheWhitelist.indexOf(key) === -1) {
                console.log('deleting cache : ' + keyList[i] );
                return caches.delete(keyList[i]);
            }
        }));
    }),
  );
});

function handlePushEvent(event) {
  const DEFAULT_TAG = 'donboulton'
  return Promise.resolve()
  .then(() => {
    return event.data.json();
  })
  .then((data) => {
    const title = data.notification.title;
    const options = data.notification;
    if (!options.tag) {
      options.tag = DEFAULT_TAG;
    }
    return registration.showNotification(title, options);
  })
  .catch((err) => {
    console.error('Push event caused an error: ', err);

    const title = 'Message Received';
    const options = {
      body: event.data.text(),
      tag: DEFAULT_TAG
    };
    return registration.showNotification(title, options);
  });
}

self.addEventListener('push', function(event) {
  event.waitUntil(handlePushEvent(event));
});

const doSomething = () => {
  return Promise.resolve();
};

// This is here just to highlight the simple version of notification click.
// Normally you would only have one notification click listener.
/**** START simpleNotification ****/
self.addEventListener('notificationclick', function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();

  // Do something as the result of the notification click
  const promiseChain = doSomething();
  event.waitUntil(promiseChain);
});
/**** END simpleNotification ****/