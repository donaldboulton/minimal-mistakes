workway('/workers/firebase.js').then(
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
