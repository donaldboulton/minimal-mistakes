const workway = require('workway');
const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

firebase.initializeApp({
  serviceAccount: "./service-account.json",
  apiKey: "AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE",
  authDomain: "airy-office-413.firebaseapp.com",
  databaseURL: "https://airy-office-413.firebaseio.com",
  projectId: "airy-office-413",
  storageBucket: "airy-office-413.appspot.com",
  messagingSenderId: "857761645811"
});

const spawn = require('spawn-worker');

// Multiple workers
const workers = spawn(function() {
  postMessage('Yo!');
  self.close();
}, 2);

workers.forEach(function(worker) {
  worker.onmessage = function(event) {
    console.log(event.data); // 'Yo!'
  };
});