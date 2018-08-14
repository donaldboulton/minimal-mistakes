importScripts("https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.3.0/firebase-messaging.js");

firebase.initializeApp({
    'messagingSenderId': '857761645811'
  });

  const messaging = firebase.messaging();
