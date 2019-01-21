import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
import myWorker from 'worker-loader!./workers/Workers';

myWorker.addEventListener('message', function(e) {
  console.log('Message from Worker: ' + e.data);
}

myWorker.postMessage('Hello World');
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