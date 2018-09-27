import React from 'react';
import icon from './icon.png';
import './Rapp.css';
import { askForPermissioToReceiveNotifications } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={icon} className="App-logo" alt="icon" />
      <h2 className="App-title">Welcome to the push-notification demo !</h2>
    </header>
    <button onClick={askForPermissioToReceiveNotifications} >
      Click here to receive notifications
    </button>
  </div>
);

export default App;
