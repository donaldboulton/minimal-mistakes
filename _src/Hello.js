import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Hello extends Component {
    render() {
      return (
        <div>
          Hello Jekyll React Webpack
        </div>
      );
    }
  }

  ReactDOM.render(<Hello />, document.getElementById('initial-content'));
