import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './lib/components/Hello';
import './lib/components/css/Rapp.css';
import Main from './lib/components/Main';
import AppNotify from './lib/components/AppNotify';

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

import '../lib/components/Hello';

import './Init.Firebase';

require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');
require('jquery-smooth-scroll');
require('default-passive-events');
