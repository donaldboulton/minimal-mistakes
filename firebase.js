const path = require('path');
const express = require('express');
const workway = require('workway/node');

// which folder should be reachable from the Web ?
workway.authorize(path.join(__dirname, 'workers'));

// create an app through workway
const app = workway.app(express());
app.use(express.static(path.join(__dirname, 'www')));
app.listen(process.env.PORT || 8080, function () {
  console.log(`http://localhost:${this.address().port}/`);
});

// any other needed import for this worker

// expose a namespaces as an object
// with any sort of serializable value
// and also methods or classes
workway({

  // any serializable data is OK (nested too)
  timestamp: Date.now(),

  // methods are OK too, each method
  // accepts serializable arguments and
  // can return a value and/or a promise
  initializeApp(config) {
    firebase.initializeApp(config);
  },

  // classes are also fine, as long as
  // these respect RemoteClass convetions
  FirebaseUser: class FirebaseUser {
    constructor() {
      this.uid = firebase.auth().currentUser.uid;
    }
    name() {
      return firebase.database()
                .ref('/users/' + this.uid)
                .once('value')
                .then(snapshot => ((
                  snapshot.val() && snapshot.val().username
                ) || 'Anonymous'));
    }
  }
});

// this worker can be regularly used like any other worker
// the passed event will never be one handled by `workway`
self.onmessage = event => {
  console.log(event.data);
};