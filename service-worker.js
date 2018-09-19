const VERSION = '01';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

const getFirebaseMessagingObject = () => {
  const config = {
    apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
    authDomain: 'airy-office-413.firebaseapp.com',
    databaseURL: 'https://airy-office-413.firebaseio.com',
    projectId: 'airy-office-413',
    storageBucket: 'airy-office-413.appspot.com',
    messagingSenderId: '857761645811',
    serverKey: "AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A",
  };
  firebase.initializeApp(config); 
};

this.addEventListener('install', (e) => {
    e.waitUntil(caches.open(VERSION).then(cache => cache.addAll([
        '/404.html',
        '/500.html',
        '/about/',
        '/calendar/',
        '/categories/',
        '/collection-archive/',
        '/contact/',
        '/',
        '/month-archive/',
        '/offline/',
        '/support/',
        '/tags/',
        '/terms.html',
        '/thanks/',
        '/year-archive/',
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
