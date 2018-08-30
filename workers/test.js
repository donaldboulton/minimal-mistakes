import Worker from 'worker-loader!./worker.js';

const worker = new Worker();

let w = new Worker();
w.postMessage('ping');
w.onmessage = (event) => {
  console.log(event.data);
};
