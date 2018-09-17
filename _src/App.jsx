import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeFirebase } from './push-notification';
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();
