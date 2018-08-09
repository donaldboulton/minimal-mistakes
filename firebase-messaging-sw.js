importScripts("https://www.gstatic.com/firebasejs/3.7.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.7.4/firebase-messaging.js");

firebase.initializeApp({
    'messagingSenderId': '857761645811'
  });

  const messaging = firebase.messaging();
