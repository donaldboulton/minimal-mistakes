'use strict';

const admin = require('firebase-admin');
let app = null;
let firebase = firebaseAdmin.firebase;

const serviceAccount = require("https://donboulton.com/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://airy-office-413.firebaseio.com"
});

firebase.initializeApp({
  'messagingSenderId': '40911931240'
});

function createCollection(path) {
  return app.firestore().collection(path);
}

self.addEventListener('message', event => {
  switch(event.data.cmd) {
    case 'initializeApp':
      app = firebase.initializeApp(event.data.data);
      const firestore = firebase.firestore();
      const settings = { timestampsInSnapshots: true };
      firestore.settings(settings);
      break;
    case 'firestore.col.add': {
      const { data, path } = event.data.data;
      createCollection(path).add(data);
      break;
    }
    case 'firestore.col.onSnapshot': {
      const path = event.data.data.path;
      createCollection(path).onSnapshot(snap => {
        const docs = snap.docs.map(doc => {
          return {
            id: doc.id,
            data: doc.data(),
            exists: doc.exists,
            metadata: {
              fromCache: doc.metadata.fromCache,
              hasPendingWrites: doc.metadata.hasPendingWrites,
            },
          };
        });
        const size = snap.size;
        const empty = snap.empty;
        self.postMessage({
          name: `firestore.col.${path}.onSnapshot`,
          response: {
            data: { docs, size, empty },
            type: 'QuerySnapshot',
          }
        });
      });
      break;
    }
  }
}, false);
