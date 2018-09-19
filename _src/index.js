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
render(<App />, document.getElementById('main'));

// CSS JS and SASS files
import './main.css';

import './Hello';

import './push-notification';

import './registerServiceWorker';

require('lazysizes');
require('svg4everybody');
require('default-passive-events');
require('file-upload-with-preview');
require('anchor-js');
