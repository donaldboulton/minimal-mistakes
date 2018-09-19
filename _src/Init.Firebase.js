import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeFirebase } from './push-notification';

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();
initializeFirebase(); 

export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '857761645811'
});
navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
}
