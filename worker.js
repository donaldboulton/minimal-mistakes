import * as firebase from 'firebase';

const getFirebaseMessagingObject = () => {
    // Initialize Firebase
    const config = {
        apiKey: 'AIzaSyDE2FsxAT0d3nROmfIZKcWoAuJNyzcmOZA',
        authDomain: 'donboulton-210120.firebaseapp.com',
        databaseURL: 'https://donboulton-210120.firebaseio.com',
        projectId: 'donboulton-210120',
        storageBucket: 'donboulton-210120.appspot.com',
        messagingSenderId: '642731329222'
    };

    firebase.initializeApp(config);

    return firebase.messaging();
};

const register = (messaging) => {
    if (!navigator.serviceWorker || !messaging) {
        return;
    }

    navigator.serviceWorker.register('./service-worker.js').then(() => {
        return navigator.serviceWorker.ready;
    }).catch((error) => {
        console.error(error);
    }).then((registration) => {
        messaging.useServiceWorker(registration);

        messaging.requestPermission().then(() => {
            console.log('Notification permission granted.');

            messaging.getToken().then((token) => {
                console.log(token);

                const options = {
                    method  : 'POST',
                    headers : new Headers({ 'Content-Type' : 'application/json' }),
                    body    : JSON.stringify({ token })
                };

                fetch('/api/webpush/register', options).then((res) => {
                    console.dir(res);
                }).catch((error) => {
                    console.error(error);
                });
            }).catch((error) => {
                console.error(error);
            });

        }).catch((error) => {
            console.log('Unable to get permission to notify.', error);
        });
    });
};

register(getFirebaseMessagingObject());

const applicationServerPublicKey = 'BD2iZ3fdD1IdYyJCHAJmwLsJPrPxeetpYe_zit7UGt4x5Nkas5TCYkLIVTabOWikVLaTDDPXkXdG0Ho1xZh6Ozw';
const applicationGCMServerKey = 'AAAAx7aUBPM:APA91bFxAfB5yAI4ILnxRpcpIAXEICRQ3O8YEu9A55ZgNEVkcc1jLMBj0g9GAvQGq4Y6DXMBcT1-1mxDzTdZIhQtGIsUWYoNK8g9ZZACxIZEmBGQQ7h-PZe7C1LxACe6FWYsHgbs0O7iJEvO3VwvWf9boSXKqALE6A';
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

function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  });
}

function getNotificationPermissionState() {
  if (navigator.permissions) {
    return navigator.permissions.query({name: 'notifications'})
    .then((result) => {
      return result.state;
    });
  }

  return new Promise((resolve) => {
    resolve(Notification.permission);
  });
}

function unsubscribeUserFromPush() {
  return registerServiceWorker()
    .then(function(registration) {
      return registration.pushManager.getSubscription();
    })
    .then(function(subscription) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .then(function(subscription) {
      pushCheckbox.disabled = false;
      pushCheckbox.checked = false;
    })
    .catch(function(err) {
      console.error('Failed to subscribe the user.', err);
      getNotificationPermissionState()
      .then((permissionState) => {
        pushCheckbox.disabled = permissionState === 'denied';
        pushCheckbox.checked = false;
      });
    });
}

function updateSubscriptionOnServer(subscription) {

  const subscriptionJson = document.querySelector('.js-subscription-json');
  const subscriptionDetails =
    document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-visible');
  }
}

function subscribeUserToPush() {
  return getSWRegistration()
  .then(function(registration) {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BD2iZ3fdD1IdYyJCHAJmwLsJPrPxeetpYe_zit7UGt4x5Nkas5TCYkLIVTabOWikVLaTDDPXkXdG0Ho1xZh6Ozw'
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
    return pushSubscription;
  });
}

function setUpPush() {
  return Promise.all([
    registerServiceWorker(),
    getNotificationPermissionState()
  ])
  .then(function(results) {
    const registration = results[0];
    const currentPermissionState = results[1];

    if (currentPermissionState === 'denied') {
      console.warn('The notification permission has been blocked. Nothing we can do.');
      pushCheckbox.disabled = true;
      return;
    }

    pushCheckbox.addEventListener('change', function(event) {
      event.target.disabled = true;

      if (event.target.checked) {
        let promiseChain = Promise.resolve();
        if (currentPermissionState !== 'granted') {
          promiseChain = askPermission();
        }

        promiseChain
          .then(subscribeUserToPush)
          .then(function(subscription) {
            if (subscription) {
              return sendSubscriptionToServer(subscription)
              .then(function() {
                return subscription;
              });
            }

            return subscription;
          })
          .then(function(subscription) {
            pushCheckbox.disabled = false;
            pushCheckbox.checked = subscription !== null;
          })
          .catch(function(err) {
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
    .then(function(subscription) {
      pushCheckbox.checked = subscription !== null;
      pushCheckbox.disabled = false;
    });
  })
  .catch(function(err) {
    console.log('Unable to register the service worker: ' + err);
  });
}

window.onload = function() {

  if (!('serviceWorker' in navigator)) {

    return;
  }

  if (!('PushManager' in window)) {
    return;
  }

  setUpPush();
};

workway({
  utils: {
    random: (size = 8) => String.fromCharCode(
      ...crypto.getRandomValues(new Uint8Array(size))
    )
  },
  app: {
    User: class User {
      constructor() {
        this.uid = firebase.auth().currentUser.uid;
      }
      getName() {
        return firebase.database()
                  .ref('/users/' + this.uid)
                  .once('value')
                  .then(snapshot => ((
                    snapshot.val() && snapshot.val().username
                  ) || 'Anonymous'));
      }
    }
  }
});
// generic message listeners (addEventListener works too)
self.onmessage = event => console.log(event.data);

function run(fn) {
    return new Worker(URL.createObjectURL(new Blob(['('+fn+')()'])));
  }

  const worker = run(function() {

    postMessage('I am a worker!');

    self.close();
  });

  worker.onmessage = (event) => console.log(event.data);

const workers = spawn(function() {
    postMessage('Yo!');
    self.close();
  }, 2);

  workers.forEach(function(worker) {
    worker.onmessage = function(event) {
      console.log(event.data); // 'Yo!'
    };
  });
