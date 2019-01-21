import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
import Worker from 'worker-loader!./workers/Workers';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};

worker.addEventListener("message", function (event) {});
class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <AppNotify />        
        <Dialog />
      </div>
    );
  }
}

import './main.css';

export default App;