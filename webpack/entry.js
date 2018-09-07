import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './components/App';

class App extends Component {
  render() {
    return (
      <App />
    )
  }
}

render(<App />, document.getElementById('root'));
