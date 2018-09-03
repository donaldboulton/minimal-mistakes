import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

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

onmessage = function(event) {
	var template = event.data;
	require(["../require.context/templates/" + event.data], function(tmpl) {
		postMessage(tmpl());
	});
};

