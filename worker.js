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
      workway({
        utils: {
          random: (size = 8) => String.fromCharCode(
            ...crypto.getRandomValues(new Uint8Array(size))
          )
        },
        app: {
          User: class User {
            constructor() {
              this.uid = firebase.auth().currentUser.uid;
            }
            getName() {
              return firebase.database()
                        .ref('/users/' + this.uid)
                        .once('value')
                        .then(snapshot => ((
                          snapshot.val() && snapshot.val().username
                        ) || 'Anonymous'));
            }
          }
        }
      });
      // generic message listeners (addEventListener works too)
      self.onmessage = event => console.log(event.data);
      // the worker can be regularly used like any other worker
      worker.postMessage('all good');
    }
);