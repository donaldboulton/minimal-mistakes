const VERSION = '15';

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

importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-database.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js')

// ON NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
    console.log(event)

    event.notification.close()

    event.waitUntil(
        self.clients.openWindow('https://donboulton.com')
    )
})

firebase.initializeApp({
  apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
  authDomain: 'airy-office-413.firebaseapp.com',
  databaseURL: 'https://airy-office-413.firebaseio.com',
  projectId: 'airy-office-413',
  storageBucket: 'airy-office-413.appspot.com',
  messagingSenderId: '857761645811',
});

const messaging = firebase.messaging();