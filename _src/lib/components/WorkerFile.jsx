import myWorker from 'worker-loader!./workers/Workers';

myWorker.addEventListener('message', function(e) {
    console.log('Message from Worker: ' + e.data);
}
  
myWorker.postMessage('Hello World');