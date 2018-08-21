'use strict';

const applicationServerPublicKey = 'BD2iZ3fdD1IdYyJCHAJmwLsJPrPxeetpYe_zit7UGt4x5Nkas5TCYkLIVTabOWikVLaTDDPXkXdG0Ho1xZh6Ozw';

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

<<<<<<< HEAD
=======
/**** START register-sw ****/
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
function registerServiceWorker() {
  return navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
    console.log('Service worker successfully registered.');
    return registration;
  })
  .catch(function(err) {
    console.error('Unable to register service worker.', err);
  });
}
<<<<<<< HEAD

=======
/**** END register-sw ****/

// This is just to make sample code eaier to read.
// TODO: Move into a variable rather than register each time.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
function getSWRegistration() {
  return navigator.serviceWorker.register('service-worker.js');
}

const worker = new Worker('worker.js');
worker.addEventListener('message', event => {
  console.log(event.data, 'Message from the worker!');
});

<<<<<<< HEAD
=======
/**** START request-permission ****/
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
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
<<<<<<< HEAD

=======
/**** END request-permission ****/

/**
 * Using `Notification.permission` directly can be slow (locks on the main
 * thread). Using the permission API with a fallback to
 * `Notification.permission` is preferable.
 * @return {Promise<String>} Returns a promise that resolves to a notification
 * permission state string.
 */
/**** START get-permission-state ****/
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
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
<<<<<<< HEAD
=======
/**** END get-permission-state ****/
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a

function unsubscribeUserFromPush() {
  return registerServiceWorker()
    .then(function(registration) {
<<<<<<< HEAD
=======
      // Service worker is active so now we can subscribe the user.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
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
<<<<<<< HEAD
=======
  // TODO: Send subscription to application server
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a

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
<<<<<<< HEAD
=======
/**** END subscribe-user ****/
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a

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
<<<<<<< HEAD
      event.target.disabled = true;

      if (event.target.checked) {
=======
      // Disable UI until we've handled what to do.
      event.target.disabled = true;

      if (event.target.checked) {
        // Just been checked meaning we need to subscribe the user
        // Do we need to wait for permission?
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
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
<<<<<<< HEAD
=======
            // We got a subscription AND it was sent to our backend,
            // re-enable our UI and set up state.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
            pushCheckbox.disabled = false;
            pushCheckbox.checked = subscription !== null;
          })
          .catch(function(err) {
            console.error('Failed to subscribe the user.', err);
<<<<<<< HEAD
=======

            // An error occured while requestion permission, getting a
            // subscription or sending it to our backend. Re-set state.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
            pushCheckbox.disabled = currentPermissionState === 'denied';
            pushCheckbox.checked = false;
          });
      } else {
<<<<<<< HEAD
=======
        // Just been unchecked meaning we need to unsubscribe the user
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
        unsubscribeUserFromPush();
      }
    });

    if (currentPermissionState !== 'granted') {
<<<<<<< HEAD
=======
      // If permission isn't granted than we can't be subscribed for Push.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
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
<<<<<<< HEAD

  if (!('serviceWorker' in navigator)) {

=======
  /**** START feature-detect ****/
  if (!('serviceWorker' in navigator)) {
    // Service Worker isn't supported on this browser, disable or hide UI.
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
    return;
  }

  if (!('PushManager' in window)) {
<<<<<<< HEAD
    return;
  }

  setUpPush();
};

const hash          = document.location.hash;
const currentUrlEl  = document.getElementById('current-url');
const clientIdForm  = document.getElementById('client-id-form');
const clientIdInput = document.getElementById('client-id');
const authLink      = document.getElementById('auth-url');

let state = null;

function submitClientId(e) {
  e.preventDefault();

  var clientId = clientIdInput.value;
  if (clientId) {

    var redirectURI = document.location.href;
    authLink.href = 'https://app.netlify.com/authorize?' +
        'client_id=' + clientId +
        '&response_type=token' +
        '&redirect_uri=' + redirectURI +
        '&state=' + state;
    setCurrentStep(2);
  }
}

function handleAccessToken() {
  const response = hash.replace(/^#/, '').split('&').reduce((result, pair) => {
    const keyValue = pair.split('=');
    result[keyValue[0]] = keyValue[1];
    return result;
  }, {});

  document.location.hash = '';

  if (!localStorage.getItem(response.state)) {
    alert("CSRF Attack");
    return;
  }

  localStorage.removeItem(response.state);

  fetch('https://api.netlify.com/api/v1/sites', {
    headers: {
      'Authorization': 'Bearer ' + response.access_token
    }
  }).then((response) => {
    response.json().then((json) => {
      showOutput('Your sites: ' + json.map((site) => `<a href="${site.url}">${site.url}</a>`).join(','));
    });
  }).catch((error) => {
    showOutput(`Error fetching sites: ${error}`);
  });
}

function setCurrentStep(step) {
  Array.from(document.querySelectorAll('.visible')).forEach((el) => el.classList.remove('visible'));
  document.getElementById('step-' + step).classList.add('visible');
}

function showOutput(text) {
  document.getElementById('output').innerHTML = text;
}

if (hash) {
  setCurrentStep(3);
  handleAccessToken();
} else {
  currentUrlEl.textContent = document.location.href;
  clientIdForm.addEventListener('submit', submitClientId, false);
  setCurrentStep(1);

  state = Math.random();
  localStorage.setItem(state, true);
=======
    // Push isn't supported on this browser, disable or hide UI.
    return;
  }
  /**** END feature-detect ****/

  // Push is supported.
  setUpPush();
};

const database = firebase.database();

function saveToFirebase(name, email, title) {
  firebase.database().ref('notifications').push().set({
    name: name,
    email: email,
    title: title,
  });
>>>>>>> e2e5134fc5695bcb2fc1ef3912e17b6ee9dc660a
}