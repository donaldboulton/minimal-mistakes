import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './Rapp.css';
import Main from './Todo';

class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// CSS JS and SASS files
import './main.css';

import './Hello';

import './Init.Firebase';

require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');
require('jquery-smooth-scroll');
require('default-passive-events');
require('anchor-js');
