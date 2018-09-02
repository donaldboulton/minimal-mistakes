import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/functions';

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

onmessage = function(event) {
	var template = event.data;
	require(["../require.context/templates/" + event.data], function(tmpl) {
		postMessage(tmpl());
	});
};

