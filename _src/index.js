import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './Hello';
class App extends Component {
 render() {
 return (
 <Hello />
 )
 }
}
render(<App />, document.getElementById('initial-content'));

// CSS JS and SASS files
import './main.css';

import './Hello';

import './Init.Firebase';

import './FileUpload';

require('lazysizes');
require('svg4everybody');
require('jquery-smooth-scroll');
require('default-passive-events');
require('anchor-js');
