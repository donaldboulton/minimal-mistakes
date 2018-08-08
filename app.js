import { initializeApp } from 'firebase-admin';
import { config } from 'firebase-function';

firebase.initializeApp({
    apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
    authDomain: 'airy-office-413.firebaseapp.com',
    databaseURL: 'https://airy-office-413.firebaseio.com',
    projectId: 'airy-office-413',
    storageBucket: 'airy-office-413.appspot.com',
    messagingSenderId: '857761645811',
});

const messaging = firebase.messaging();
const database = firebase.database();
const pushBtn = document.getElementById('push-button');
const userToken = null;
const isSubscribed = false;

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                messaging.useServiceWorker(registration);

                initializePush();
            })
            .catch(err => console.log('Service Worker Error', err));
    } else {
        pushBtn.textContent = 'Push not supported.';
    }
});

function initializePush() {
    userToken = localStorage.getItem('pushToken');

    isSubscribed = userToken !== null;
    updateBtn();

    pushBtn.addEventListener('click', () => {
        pushBtn.disabled = true;

        if (isSubscribed) return unsubscribeUser();

        return subscribeUser();
    });
}

function updateBtn() {
    if (Notification.permission === 'denied') {
        pushBtn.textContent = 'Subscription blocked';
        return;
    }

    pushBtn.textContent = isSubscribed ? 'Unsubscribe' : 'Subscribe';
    pushBtn.disabled = false;
}

function updateSubscriptionOnServer(token) {
    if (isSubscribed) {
        return database.ref('device_ids')
            .equalTo(token)
            .on('child_added', snapshot => snapshot.ref.remove());
    }

    database.ref('device_ids').once('value')
        .then((snapshots) => {
            let deviceExists = false;

            snapshots.forEach((childSnapshot) => {
                if (childSnapshot.val() === token) {
                    deviceExists = true;
                    return console.log('Device already registered.');
                }
            });

            if (!deviceExists) {
                console.log('Device subscribed');
                return database.ref('device_ids').push(token);
            }
        });
}

function unsubscribeUser() {
    messaging.deleteToken(userToken)
        .then(() => {
            updateSubscriptionOnServer(userToken);
            isSubscribed = false;
            userToken = null;
            localStorage.removeItem('pushToken');
            updateBtn();
        })
        .catch(err => console.log('Error unsubscribing', err));
}

messaging.onMessage((payload) => {
    const snackbarContainer = document.querySelector('#snackbar');

    const data = {
        message: payload.notification.title,
        timeout: 5000,
        actionHandler() {
            location.reload();
        },
        actionText: 'Reload',
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
});
export const sendPostNotification = functions.database.ref('/posts/{postID}').onWrite(event => {
  // react to changes
}

newFunction();

    function newFunction() {
      return initializeApp(config().firebase);
    }

const postID    = event.params.postID,
    postTitle = event.data.val();

if (!postTitle) return console.log(`Post ${postID} deleted.`);

const pushCheckbox = document.querySelector('.js-push-toggle-checkbox');

function urlBase64ToUint8Array(base64String) {
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

function getSWRegistration() {
    return navigator.serviceWorker.register('service-worker.js');
}
function askPermission() {
    return new Promise(((resolve, reject) => {
        const permissionResult = Notification.requestPermission((result) => {
            resolve(result);
        });

        if (permissionResult) {
            permissionResult.then(resolve, reject);
        }
    }))
        .then((permissionResult) => {
            if (permissionResult !== 'granted') {
                throw new Error('We weren\'t granted permission.');
            }
        });
}
function getNotificationPermissionState() {
    if (navigator.permissions) {
        return navigator.permissions.query({ name: 'notifications' })
            .then(result => result.state);
    }

    return new Promise((resolve) => {
        resolve(Notification.permission);
    });
}

function unsubscribeUserFromPush() {
    return registerServiceWorker()
        .then(registration => registration.pushManager.getSubscription())
        .then((subscription) => {
            if (subscription) {
                return subscription.unsubscribe();
            }
        })
        .then((subscription) => {
            pushCheckbox.disabled = false;
            pushCheckbox.checked = false;
        })
        .catch((err) => {
            console.error('Failed to subscribe the user.', err);
            getNotificationPermissionState()
                .then((permissionState) => {
                    pushCheckbox.disabled = permissionState === 'denied';
                    pushCheckbox.checked = false;
                });
        });
}

function sendSubscriptionToBackEnd(subscription) {
    return fetch('/api/save-subscription/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }

            return response.json();
        })
        .then((responseData) => {
            if (!(responseData.data && responseData.data.success)) {
                throw new Error('Bad response from server.');
            }
        });
}

function subscribeUserToPush() {
    return getSWRegistration()
        .then((registration) => {
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U',
                ),
            };

            return registration.pushManager.subscribe(subscribeOptions);
        })
        .then((pushSubscription) => {
            console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
            return pushSubscription;
        });
}

function setUpPush() {
    return Promise.all([
        registerServiceWorker(),
        getNotificationPermissionState(),
    ])
        .then((results) => {
            const registration = results[0];
            const currentPermissionState = results[1];

            if (currentPermissionState === 'denied') {
                console.warn('The notification permission has been blocked. Nothing we can do.');
                pushCheckbox.disabled = true;
                return;
            }

            pushCheckbox.addEventListener('change', (event) => {
                event.target.disabled = true;

                if (event.target.checked) {
                    let promiseChain = Promise.resolve();
                    if (currentPermissionState !== 'granted') {
                        promiseChain = askPermission();
                    }

                    promiseChain
                        .then(subscribeUserToPush)
                        .then((subscription) => {
                            if (subscription) {
                                return sendSubscriptionToBackEnd(subscription)
                                    .then(() => {
                                        return subscription;
                                    });
                            }

                            return subscription;
                        })
                        .then((subscription) => {

                            pushCheckbox.disabled = false;
                            pushCheckbox.checked = subscription !== null;
                        })
                        .catch((err) => {
                            console.error('Failed to subscribe the user.', err);
                            pushCheckbox.disabled = currentPermissionState === 'denied';
                            pushCheckbox.checked = false;
                        });
                } else {
                    unsubscribeUserFromPush();
                }
            });

            if (currentPermissionState !== 'granted') {
                pushCheckbox.disabled = false;
                return;
            }

            return registration.pushManager.getSubscription()
                .then((subscription) => {
                    pushCheckbox.checked = subscription !== null;
                    pushCheckbox.disabled = false;
                });
        })
        .catch((err) => {
            console.log(`Unable to register the service worker: ${err}`);
        });
}

window.onload = function () {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    if (!('PushManager' in window)) {
        return;
    }
    setUpPush();
};
