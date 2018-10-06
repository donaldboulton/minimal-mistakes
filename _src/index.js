import React, { Component } from 'react';
import { render } from 'react-dom';
import './lib/components/css/Rapp.css';
import Main from './lib/components/Main';
import AppNotify from './lib/components/AppNotify';
import 'jquery';
class App extends Component {

  render() {
    return (
      <div>
        <Main />
        <AppNotify />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// CSS JS and SASS files
import './main.css';
import './Init.Firebase';
import '../node_modules/jquery-smooth-scroll/jquery.smooth-scroll.js';
require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');

require('default-passive-events');
