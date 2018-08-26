importScripts('https://unpkg.com/workway/worker.js');

workway('/workers/firebase-bundle.js').then(
    async function ({worker, namespace}) {
      await namespace.initializeApp({
        apiKey: "AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE",
        authDomain: "airy-office-413.firebaseapp.com",
        databaseURL: "https://airy-office-413.firebaseio.com",
        projectId: "airy-office-413",
        storageBucket: "airy-office-413.appspot.com",
        messagingSenderId: "857761645811"
      });
      const fb = new namespace.FirebaseUser();
      const name = await fb.name();
      console.log(name); // will log the user name, if any

      // the worker can be regularly used like any other worker
      worker.postMessage('all good');
    }
);