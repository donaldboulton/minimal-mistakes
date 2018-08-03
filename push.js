import mitt from 'mitt';

const emitter = mitt();
const SUPPORTED = 'supported';
const ERROR = 'error';
const SUBSCRIBED = 'subscribed';
const UNSUBSCRIBED = 'unsubscribed';

function buildApplicationServerKey() {
    const base64 = 'BE8PyI95I_jBIfb_LTS_nkUJnOwjLP2zAaGBSFEi3jmFJ3l5ox7-NtNqrVuyPL4Qmt4UxDI-YgwYI1sEMIpoU90=';
    const rfc4648 = base64.replace(/-/g, '+').replace(/_/g, '/');
    const characters = atob(rfc4648).split('').map(character => character.charCodeAt(0));
    return new Uint8Array(characters);
}

function sendSubscriptionToServer(subscription) {
    // This is where you'd update the subscription on the server.
    document.querySelector('.js-subscription').innerHTML = JSON.stringify(subscription.toJSON());
}

function removeSubscriptionFromServer(subscription) {
    // This is where you'd remove the subscription from the server.
}

const registerServiceWorker = function () {
    if ('serviceWorker' in navigator) {
        // Unless you change the URL of the service worker script,
        // `navigator.serviceWorker.register()` is effectively a no-op during subsequent visits.
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                initializeState();
                console.log('ServiceWorker registration successful.', registration);
            }).catch((error) => {
                console.error('ServiceWorker registration failed.', error);
            });
    } else {
        console.log('Service workers aren’t supported in this browser.');
    }
};

const initializeState = function () {
        // Are Notifications supported in the service worker?
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.error('Notifications aren’t supported.');
        return;
    }

        // If the current notification permission is denied,
        // it's a permanent block until the user changes the permission
    if (Notification.permission === 'denied') {
        console.error('The user has blocked notifications.');
        return;
    }

        // Check if push messaging is supported
    if (!('PushManager' in window)) {
        console.error('Push messaging isn’t supported.');
        return;
    }

    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager.getSubscription()
            .then((subscription) => {
                emitter.emit(SUPPORTED);

                // Do we already have a push message subscription?
                if (subscription) {
                    sendSubscriptionToServer(subscription);
                    emitter.emit(SUBSCRIBED);
                }
            })
            .catch((error) => {
                console.error('Error during getSubscription()', error);
            });
    });
};

const subscribe = function () {
    function permissionDenied() {
        emitter.emit(ERROR, 'Notification Error, ' +
                'müssen Sie Benachrichtigungen für diese Website in Ihrem Browser erlauben.');
        unsubscribe();
    }
    function permissionGranted() {
        navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
            serviceWorkerRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: buildApplicationServerKey(),
            })
                    .then((subscription) => {
                        sendSubscriptionToServer(subscription);
                        emitter.emit(SUBSCRIBED);
                    })
                    .catch((error) => {
                        console.error('Unable to subscribe to messaging server.', error);
                        emitter.emit(ERROR,
                            'Bei der Anmeldung am externen Benachrichtigungsdienst ist ein Fehler aufgetreten. ' +
                            'Bitte versuchen Sie es in ein paar Minuten wieder oder wenden sich an Ihren Ansprechpartner.',
                        );
                    });
        });
    }
    if (Notification.permission === 'denied') {
        permissionDenied();
        return;
    }
    if (Notification.permission === 'default') {
        Notification.requestPermission().then((result) => {
            if (result !== 'granted') {
                permissionDenied();
                return;
            }
            permissionGranted();
        });
        return;
    }
    permissionGranted();
};

const unsubscribe = function () {
    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        serviceWorkerRegistration.pushManager.getSubscription()
            .then((subscription) => {
                if (!subscription) {
                    emitter.emit(UNSUBSCRIBED);
                    return;
                }
                subscription.unsubscribe().then(() => {
                    emitter.emit(UNSUBSCRIBED);
                }).catch((error) => {
                    console.error('Unable to unsubscribe to messaging server.', error);
                    emitter.emit(ERROR,
                        'Bei der Abmeldung am externen Benachrichtigungsdienst ist ein Fehler aufgetreten. ' +
                        'Sie werden von uns dennoch keine Push-Benachrichtigungen mehr erhalten.',
                    );
                });
                removeSubscriptionFromServer();
            })
            .catch((error) => {
                console.error('Error during getSubscription()', error);
            });
    });
};

export default {
    init: registerServiceWorker,
    on: emitter.on,
    SUPPORTED,
    ERROR,
    SUBSCRIBED,
    UNSUBSCRIBED,
    subscribe,
    unsubscribe,
};
