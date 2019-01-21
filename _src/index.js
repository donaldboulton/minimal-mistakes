import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
import myWorker from 'worker-loader!./workers/Workers';

myWorker.onmessage = function(event) {  
  console.log("worker returned " + event.data);
};

myWorker.postMessage("Init Message");
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