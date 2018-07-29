---
layout: null
---

importScripts('js/vendor/serviceworker/serviceworker-cache-polyfill.js');

var cacheName = 'donboulton.com-cache-v1';
var filesToCache = [
    '/css/main.css',
    {% for page in site.html_pages %}
    	'{{ page.url }}',
    {% endfor %}
    'assets/images/pages/bg-10-min.png',
    'assets/images/fav-icons/favicon-32x32.png',
	  '/posts',
	  '/feed.json'
    {% for post in site.posts %}
    	'{{ post.url }}',
	  {% endfor %}

	{% for file in site.static_files %}
    {% if file.extname == '.js' or file.path contains '/vendor/letter-avatar' or file.path contains '/vendor/twitter' %}
        '{{ file.path }}',
		{% endif %}
  {% endfor %}

{% raw %}
function clearOldCache() {
    return caches.keys().then(keys => {
        // Remove caches whose name is no longer valid.
        return Promise.all(keys
            .filter(key => {
                return key !== cacheName;
            })
            .map(key => {
                console.log(`Service Worker: removing cache ${key}`);
                return caches.delete(key);
            })
        );
    });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
          return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', event => {
    event.waitUntil(clearOldCache());
});

self.addEventListener('fetch', event => {
    let request = event.request;
    let url = new URL(request.url);

    if (url.origin !== location.origin) {
        return;
    }

    if (request.method !== 'GET') {
        event.respondWith(fetch(request));
        return;
    }

    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
        event.respondWith(
            fetch(request).catch(() => caches.match('/offline/'))
        );
        return;
    }

    event.respondWith(
        caches.match(request)
            .then(response => {
                if (response) {
                    console.log('Serving cached: ', event.request.url);
                    return response;
                }
                console.log('Fetching: ', event.request.url);
                return fetch(request)
            })
    );
});
{% endraw %}