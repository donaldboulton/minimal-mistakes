var admin = require("firebase-admin");

var serviceAccount = require("/serviceAccountKey.json");

admin.initializeApp({
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

const gcmServerKey = 'AIzaSyC5itnz9jHmpvQRhq8sJUCFUy2SYUPanGs';
webpush.setGCMAPIKey(gcmServerKey);

const vapidKeys = {
  publicKey: 'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU',
  privateKey: 'ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc'
};

webpush.setVapidDetails(
  'mailto:donaldboulton@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

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

const postBtn = document.getElementById('comment-form-submit');
const list = document.getElementById('list');

function saveToDB(title) {
    firebase.database().ref('comments').push(title);
}

postBtn.addEventListener('click', () => {
    const input = document.getElementById('comment-form-title');
    const inputWrap = document.querySelector('.comment-form');
    const listItem = document.createElement('li');

    listItem.innerHTML = input.value;
    list.append(listItem);

    saveToDB(input.value);
    input.value = '';
    inputWrap.classList.remove('is-dirty');
});

loadPosts();

export default function() {

  const database = firebase.database();
  const connectedRef = database.ref(".info/connected");

  connectedRef.on("value", function(snap) {
      if (snap.val() === true) {
          console.log("connected");
          // database.goOnline()
      } else {
          console.log("not connected");
          // database.goOffline()
      }
  });
  readDB();

  function readDB() {
      console.log('read');
      database.ref('posts').once('value').then(snapshots => {

          snapshots.forEach(childSnapshot => {
              const data = childSnapshot.val();
              const listItem = document.createElement('li');

              listItem.innerHTML = data;
              list.append(listItem);
          });

      });
  }

}

messaging.requestPermission()
    .then(function() {
        return messaging.getToken();
    })
    .then(function(token) {
        // send rest call to add to database
        $.ajax('https://airy-office-413.firebaseio.com/pushtokens/'+token+'.json', {
            method: 'PUT',
            data: 'true',
            error: function(err) {
            }
        });
    })
    .catch(function(err) {
        console.log('Permission denied');
});
newFunction();

  function newFunction() {
    return initializeApp(config().firebase);
  }

messaging.onMessage((payload) => {
    const commentsContainer = document.querySelector('#comments');

    const data = {
        message: payload.notification.title,
        timeout: 5000,
        actionHandler() {
            location.reload();
        },
        actionText: 'Reload',
    };
    commentsContainer.CommentsList.showComments(data);
});
export const sendPostNotification = functions.database.ref('/comments/{commentID}').onWrite(event => {
  // react to changes
}

const getDeviceTokensPromise = admin.database()
  .ref('device_ids')
  .once('value')
  .then(snapshots => {

      if (!snapshots) return console.log('No devices to send to.');

      // work with snapshots
}

const payload = {
  notification: {
    title: `New Comment: ${commentTitle}`,
    body: 'Click to read notifications comment.',
    icon: 'https://donboulton.com/assets/images/push-icon.png'
  }
};

snapshots.forEach(childSnapshot => {
  const token = childSnapshot.val();

  admin.messaging().sendToDevice(token, payload).then(response => {
    // handle response
  });
}

response.results.forEach(result => {
  const error = result;

  if (error) {
    console.error('Failed delivery to', token, error);

  if (error.code === 'messaging/invalid-registration-token' ||
      error.code === 'messaging/registration-token-not-registered') {

      childSnapshot.ref.remove();
      console.info('Was removed:', token);

  } else {
    console.info('Notification sent to', token);
  }

}

$(function() {
  var ref = new Firebase("https://airy-office-413.firebaseio.com/"),
    postRef = ref.child(slugify(window.location.pathname));

    postRef.on("child_added", function(snapshot) {
      var newComment = snapshot.val();
      $(".comments").prepend('<div class="comment">' +
        '<h4>' + escapeHtml(newComment.name) + '</h4>' +
        '<div class="comment-avatar-img lazyload blur-up"><img src="http://www.gravatar.com/avatar/' + escapeHtml(newComment.md5Email) + '?s=100&d=retro"/></div> ' +
        '<span class="date">' + moment(newComment.postedAt).fromNow() + '</span><p>' + escapeHtml(newComment.message)  + '</p></div>');
    });

    $("#comment-form").submit(function() {
      postRef.push().set({
        name: $("#comment-form-name").val(),
        title: $("#coment-form-title").val(),
        message: $("#coment-form-message").val(),
        url: $("#coment-form-url").val(),
        notifications: $("#push-button").val(),
        md5Email: md5($("#comment-form-email").val()),
        postedAt: Firebase.ServerValue.TIMESTAMP
    });

    $("input[type=text], textarea").val("");
    return false;
    });
});

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}