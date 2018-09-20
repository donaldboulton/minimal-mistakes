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

import './push-notification';

import './Init.Firebase';

import 'firebase-messaging-sw';

require('lazysizes');
require('svg4everybody');
require('default-passive-events');
require('file-upload-with-preview');
require('anchor-js');
