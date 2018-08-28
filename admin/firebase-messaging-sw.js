'use strict';

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
