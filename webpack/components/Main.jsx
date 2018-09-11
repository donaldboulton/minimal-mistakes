import React, { Component } from 'react';

// eslint-disable-next-line
import myWorker from 'worker-loader!./worker.js';
class App extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  componentWillMount() {
    if(window.SharedWorker) {
      console.log(myWorker);
      myWorker.port.postMessage('Hello worker');

      myWorker.port.onmessage = function(e) {
        console.log('Message received from worker');
        console.log(e.data);
      };
    }
  }
}
