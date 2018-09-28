import React, { Component } from 'react';
import { render } from 'react-dom';
import Async from 'react-code-splitting';
import Hello from './components/Hello';
import './Rapp.css';
const Main = import('./components/Main');
const App = import('./components/App');

class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

const Main = () => (<Async load={import('./components/Main')} />);
const App = () => (<Async load={import('./components/App')} />);
const Countdown = () => (<Async load={import('./views/countdown')} />);

render(<App />, document.getElementById('root'));


// CSS JS and SASS files
import './main.css';

import './components/Hello';

import './Init.Firebase';

require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');
require('jquery-smooth-scroll');
require('default-passive-events');
require('anchor-js');
