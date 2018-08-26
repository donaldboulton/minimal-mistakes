export interface PostMessage {
  cmd: string;
  data: any;
}

interface ListenerHash {
  [key: string]: Function;
}

interface WorkerQueryDocumentSnapshot {
  id: string;
  data: () => any;
  exists: boolean;
  metadata: { fromCache: boolean; hasPendingWrites: boolean };
}

interface WorkerQuerySnapshot {
  docs: WorkerQueryDocumentSnapshot[];
  size: number;
  empty: boolean;
}

export class FireWorker {
  worker: Worker;
  listeners: ListenerHash = {};
  constructor() { 
    this.worker = new Worker('./worker.js');
    this.worker.addEventListener('message', event => {
      let data = event.data.response.data;
      if(event.data.response.type === 'QuerySnapshot') {
        data.docs = data.docs.map(d => {
          const _data = d.data;
          d.data = () => _data
          return d;
        });
      }
      this.listeners[event.data.name](data);
    });
  }

  initializeApp(opts: any) {
    this.worker.postMessage({ cmd: 'initializeApp', data: opts });
    return new FireWorkerApp(this);
  }

  postMessage(message: PostMessage) {
    this.worker.postMessage(message);
  }

  registerListener(namespace: string, callback: any) {
    this.listeners[namespace] = callback;
  }
}

export class FireWorkerApp {
  constructor(private worker: FireWorker) { }
  firestore() { 
    return new FireWorkerFirestore(this.worker);
  }
}

export class FireWorkerFirestore {
  constructor(private worker: FireWorker) { }
  collection(path: string) {
    return new FireWorkerFirestoreCol(this.worker, path);
  }
}

export class FireWorkerFirestoreCol {
  namespace: string;
  snapshotNamespace: string;
  pathNamespace: string;
  constructor(private worker: FireWorker, private path: string) { 
    this.namespace = `firestore.col`;
    this.snapshotNamespace = `${this.namespace}.onSnapshot`;
    this.pathNamespace = `${this.namespace}.${path}`;
  }
  onSnapshot(next: (snap: WorkerQuerySnapshot) => void) {
    this.worker.postMessage({
      cmd: this.snapshotNamespace,
      data: { path: this.path }
    });
    this.worker.registerListener(`${this.pathNamespace}.onSnapshot`, next);
  }
  add(data: any) {
    this.worker.postMessage({
      cmd: `${this.namespace}.add`,
      data: { path: this.path, data },
    });
  }
}

export const firebase = new FireWorker();
