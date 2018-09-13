import * as firebase from 'firebase/app';
import 'firebase/messaging';

const _ = require('lodash');

const getFirebaseMessagingObject = () => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE",
        authDomain: "airy-office-413.firebaseapp.com",
        databaseURL: "https://airy-office-413.firebaseio.com",
        projectId: "airy-office-413",
        storageBucket: "airy-office-413.appspot.com",
        messagingSenderId: "857761645811"
    };

    firebase.initializeApp(config);

    return firebase.messaging();
};

onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    };
};


