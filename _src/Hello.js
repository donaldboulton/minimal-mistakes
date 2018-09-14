import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
      return (
        <div>
          Hello Jekyll React Webpack
        </div>
      );
    }
  }

  render(<Hello />, document.getElementById('initial-content'));
