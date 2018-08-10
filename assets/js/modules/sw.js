// import firebase from 'firebase/app'
// import 'firebase/database'
// import 'firebase/messaging'

import snackbar from './snackbar'


firebase.initializeApp({
    apiKey: "AIzaSyCNWf72UrEdxbzu1YnW4Yd3zfzQIKtXl94",
    authDomain: "push-test-75834.firebaseapp.com",
    databaseURL: "https://push-test-75834.firebaseio.com",
    projectId: "push-test-75834",
    storageBucket: "push-test-75834.appspot.com",
    messagingSenderId: "858712102689"
})

const pushBtn   = document.getElementById('push-button'),
      database  = firebase.database(),
      messaging = firebase.messaging()


let userToken    = null,
    isSubscribed = false


messaging.onMessage(payload => {
    snackbar(payload)
})


// UPADTE SUBSCRIPTION BUTTON
function updateBtn() {

    if (Notification.permission === 'denied') {
        pushBtn.textContent = 'Subscription blocked'
        return
    }

    pushBtn.textContent = isSubscribed ? 'Unsubscribe' : 'Subscribe'
    pushBtn.disabled = false
}


// UPDATE SUBSCRIPTION ON SERVER
function updateSubscriptionOnServer(token) {

    if (isSubscribed) {
        return database.ref('device_ids')
                .equalTo(token)
                .on('child_added', snapshot => snapshot.ref.remove())
    }

    database.ref('device_ids').once('value')
        .then(snapshots => {
            let deviceExists = false

            snapshots.forEach(childSnapshot => {
                if (childSnapshot.val() === token) {
                    deviceExists = true
                    return console.log('Device already registered.');
                }
            })

            if (!deviceExists) {
                console.log('Device subscribed');
                return database.ref('device_ids').push(token)
            }
        })
}


// SUBSCRIBE
function subscribeUser() {

    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then(token => {

            updateSubscriptionOnServer(token)
            isSubscribed = true
            userToken = token
            localStorage.setItem('pushToken', token)
            updateBtn()
        })
        .catch(err => console.log('Denied', err))
}


// UNSUBSCRIBE
function unsubscribeUser() {

    messaging.deleteToken(userToken)
        .then(() => {
            updateSubscriptionOnServer(userToken) // token === true
            isSubscribed = false
            userToken = null
            localStorage.removeItem('pushToken')
            updateBtn()
        })
        .catch(err => console.log('Error unsubscribing', err))
}


// INIT PUSH
function initializePush() {

    userToken = localStorage.getItem('pushToken')

    isSubscribed = userToken !== null
    updateBtn()

    // CHANGE SUBSCRIPTION ON CLICK
    pushBtn.addEventListener('click', () => {
        pushBtn.disabled = true

        if (isSubscribed) return unsubscribeUser()

        return subscribeUser()
    })
}


// REGISTER SW
window.addEventListener('load', () => {

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {

                messaging.useServiceWorker(registration)

                initializePush()

            })
            .catch(err => console.log('Service Worker Error', err))

    } else {
        pushBtn.textContent = 'Push not supported.'
    }

})
