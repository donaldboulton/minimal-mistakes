var urlsToCache = [
  'offline.html',
  'assets/images/pages/bg-10-min.png',
  'assets/css/main.css',
  'assets/js/main.min.js'
];

var CACHE_NAME = 'don-boulton-cache-v1';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache name: adjust version number to invalidate service worker cachce.
var CACHE_NAME = 'don-boulton-cache-v2';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    cache.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(function() {
      // If it can't fetch the asset, display the offline only page
      return caches.match('/offline.html');
    })
  );
});