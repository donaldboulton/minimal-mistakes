import React, { Component } from 'react';
import {render} from 'react-dom';
import Main from './components/Main';
import Hello from './components/Hello';

ReactDOM.render(<Hello />, document.getElementById('app'))

ReactDOM.render(<Main />, document.getElementById('app-root'))
