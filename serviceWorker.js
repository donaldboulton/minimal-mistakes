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
	  '/feed.json',
    {% for post in site.posts %}
    	'{{ post.url }}',
	  {% endfor %}

	{% for file in site.static_files %}
    {% if file.extname == '.js' or file.path contains '/vendor/letter-avatar' or file.path contains '/vendor/twitter' %}
        '{{ file.path }}',
		{% endif %}
  {% endfor %}
  self.addEventListener('install', function(event) {
      event.waitUntil(
          caches.open(cacheName).then(function(cache) {
              return cache.addAll(filesToCache);
          })
      );
  });
  self.addEventListener('fetch', function(event) {
      event.respondWith(
          caches.match(event.request)
              .then(function(response) {
                  if (response) {
                      console.log('[*] Serving cached: ' + event.request.url);
                      return response;
                  }
                  console.log('[*] Fetching: ' + event.request.url);
                  return fetch(event.request);
              }
          )
    );
  });
];