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

import './Realtime';

import './WebPushManager';

import './Firebase';

const { JSDOM } = require( 'jsdom' );
const jsdom = new JSDOM( testHTML );

// Set window and document from jsdom
const { window } = jsdom;
const { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

const $ = global.jQuery = require( 'jquery' );

console.log( `jQuery ${jQuery.fn.jquery} working! Yay!!!` );
const inputElement = $( '#fiptest' );
console.log( inputElement.length );

require('lightgallery');
require('lazysizes');
require('lunr');
require('svg4everybody');
require('default-passive-events');
require('anchor-js');
