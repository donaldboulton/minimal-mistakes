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

function getSWRegistration() {
  return navigator.serviceWorker.register('service-worker.js');
}

const worker = new Worker('worker.js');
worker.addEventListener('message', event => {
  console.log(event.data, 'Message from the worker!');
});

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

const netlifyIdentity = require("netlify-identity-widget");

netlifyIdentity.init({
  container: "#netlify-modal" // defaults to document.body,
});

netlifyIdentity.open(); // open the modal
netlifyIdentity.open("login"); // open the modal to the login tab
netlifyIdentity.open("signup"); // open the modal to the signup tab

netlifyIdentity.on("init", user => console.log(user));
netlifyIdentity.on("login", user => console.log(user));
netlifyIdentity.on("logout", () => console.log("Logged out"));
netlifyIdentity.on("error", err => console.error("Logged out"));
netlifyIdentity.on("open", () => console.log("Widget opened"));
netlifyIdentity.on("close", () => console.log("Widget closed"));

// Close the modal
netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

// Access the underlying GoTrue JS client.
// Note that doing things directly through the GoTrue client brings a risk of getting out of
// sync between your state and the widget’s state.
netlifyIdentity.gotrue;

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
}