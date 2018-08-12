const messaging = firebase.messaging(),
      database  = firebase.database(),
      pushBtn   = document.getElementById('push-button');

let userToken    = null,
    isSubscribed = false;

window.addEventListener('load', () => {

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {

                messaging.useServiceWorker(registration);

                initializePush()
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
      .then(snapshots => {
          let deviceExists = false;

          snapshots.forEach(childSnapshot => {
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
          updateSubscriptionOnServer(userToken)
          isSubscribed = false;
          userToken = null;
          localStorage.removeItem('pushToken');
          updateBtn();
      })
      .catch(err => console.log('Error unsubscribing', err));
}

const commentBtn = document.getElementById('comment-form-submit');
const list = document.getElementById('list');

function saveToDB(title) {
    firebase.database().ref('comments').push(title);
}

commentBtn.addEventListener('click', () => {
    const input = document.getElementById('comment-form-title');
    const inputWrap = document.querySelector('.comment-title');
    const listItem = document.createElement('li');

    listItem.innerHTML = input.value;
    list.append(listItem);

    saveToDB(input.value);
    input.value = '';
    inputWrap.classList.remove('is-dirty');
});

const admin     = require('firebase-admin'),
      functions = require('firebase-function');

admin.initializeApp(functions.config().firebase);

exports.sendCommentNotification = functions.database.ref('/comments/{commentID}').onWrite(event => {
  // react to changes
}

const commentID    = event.params.commentID,
      commentTitle = event.data.val();

if (!commentTitle) return console.log(`Post ${commentID} deleted.`);
