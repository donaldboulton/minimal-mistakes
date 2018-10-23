const VERSION = '1';

this.addEventListener('install', (e) => {
    e.waitUntil(caches.open(VERSION).then(cache => cache.addAll([
        '/assets/app.css',
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
        '/build/js/vendor/letter-avatar/letter-avatar.js',
        '/build/js/lunr/lunr.min.js',
        '/build/js/lunr/lunr-store.js',
        '/build/js/lunr/lunr-en.js',
        '/build/js/github/github-widget.js',
        '/assets/images/bg10-min.png',
        '/assets/images/badge.png',
        '/assets/images/icon.png',
        '/assets/images/fav-icons/favicon-32x32.png',
        '/assets/images/donald-boulton-100.jpg',
        '/assets/images/reviews.jpg',
        '/assets/images/digital_box_1400-compressor.jpg',
        '/assets/images/stop-spam.jpg',
        '/assets/images/jekyll-reversed.jpg',
        '/assets/photography/cat-gallery/einstine-1200.jpg',
        '/assets/images/performance/speedtest_donboulton-1200.jpg',
        '/assets/images/staticman-github-gitlab.png',
        '/assets/images/staticman-github-gitlab-1200.png',
        '/assets/images/staticman-github-gitlab-lq.png',
        '/assets/images/staticman-github-gitlab-320.png',
        '/assets/images/colorbox-html.jpg',
        '/assets/images/colorbox-html-1200.jpg',
        '/assets/images/colorbox-html-lq.jpg',
        '/assets/images/colorbox-html-320.jpg',
        '/assets/images/jekyll-admin-1200.jpg',
        '/assets/images/windows-tweaks-1200.png',
        '/assets/images/defrag-sql-2014-1200.png',
        '/assets/images/letter-avatar-header-1200.png',
        '/assets/images/social-sharing.jpg',
        '/assets/images/defrag-sql-2014-1200.png',
        '/assets/images/check_sql_fragmentation-1200.png',
        '/assets/images/stop-spam-1200.jpg',
        '/assets/images/reviews-1200.jpg',
        '/assets/images/social-sharing-1200.jpg',
        '/assets/images/jekyll-reversed-1200.jpg',
        '/assets/images/stop-spam-320.jpg',
        '/assets/images/jekyll-admin-320.jpg',
        '/assets/images/windows-tweaks-320.png',
        '/assets/images/defrag-sql-2014-320.png',
        '/assets/images/letter-avatar-header-320.png',
        '/assets/images/social-sharing-320.jpg',
        '/assets/images/defrag-sql-2014-320.png',
        '/assets/images/check_sql_fragmentation-320.png',
        '/assets/images/reviews-320.jpg',
        '/assets/images/social-sharing-320.jpg',
        '/assets/images/jekyll-reversed-320.jpg',
        '/assets/images/stop-spam-lq.jpg',
        '/assets/images/jekyll-admin-lq.jpg',
        '/assets/images/windows-tweaks-lq.png',
        '/assets/images/defrag-sql-2014-lq.png',
        '/assets/images/letter-avatar-header-lq.png',
        '/assets/images/social-sharing-lq.jpg',
        '/assets/images/defrag-sql-2014-lq.png',
        '/assets/images/check_sql_fragmentation-lq.png',
        '/assets/images/reviews-lq.jpg',
        '/assets/images/social-sharing-lq.jpg',
        '/assets/images/jekyll-reversed-lq.jpg',
        '/assets/icons/icons.svg',
        '/assets/images/github-74-80.png',
        '/assets/images/cf-logo-v-rgb-rev-239-80.png',
        '/assets/images/red-flask-32.png',
        '/assets/images/fav-icons/favicon.png',
        '/service-worker.js',
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

/* eslint-disable max-len */

const applicationServerPublicKey = 'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU';

/* eslint-enable max-len */

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1540240125.4
importScripts('https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js');
uaSetup.worker(self, {
  defaultIcon: 'https://d33wubrfki0l68.cloudfront.net/bc89e0f5c80795717601622b4735b32afa498ce2/5504d/assets/icons-850ff6118610b1db2616874ac111f893/favicon.ico',
  defaultTitle: 'Donald Boulton',
  defaultActionURL: 'https://donboulton.com',
  appKey: '1aQDr7-6SVyBngQwRKgXtA',
  token: 'MToxYVFEcjctNlNWeUJuZ1F3UktnWHRBOkxGMmM1UmJyN2h0c2NLRmVZUHpTN2VRNThYUlFQTnk1TjFTT3N1OFBVOFk',
  vapidPublicKey: 'BJHTWH3_SATKp4Exa2oaFNYk92PSXIQl-wODOTPU300bMbwCP8QiQkKG82LYw0PQlz0bCC73HZeWe6q88apmQFQ='
});
