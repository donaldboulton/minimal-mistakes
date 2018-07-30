---
layout: null
---

var APP_PREFIX = 'donboulton';
var VERSION = 'version_03';
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  '/index.html',
  {% for asset in site.static_files %}
    {% if asset.path contains '/assets/images' or asset.path contains '/assets/icons' or asset.extname == '.jpg' %}
    ok'{{ file.path }}',
    {% endif %}
  {% endfor %}
  {% for page in site.html_pages %}
    '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
    '{{ post.url }}',
	{% endfor %}
  '/assets/js/main.min.js',
  '/assets/css/main.css',
  '/assets/js/vendor/letter-avatar/letter-avatar.js',
  '/assets/js/vendor/twitter/web-intents.js',
  '/index.html',
  '/assets/images/bg10-min.png',
  '/assets/images/fav-icons/favicon-32x32.png',
  '/sw.js',
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

      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });

      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i]);
        }
      }));
    })
  );
});