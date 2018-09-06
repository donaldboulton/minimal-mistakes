import React, { Component } from 'react';
import {render} from 'react-dom';
import App from "./components/App.js";
class App extends Component {
  render() {
    return (
      <App />
    )
  }
}

render(<App />, document.getElementById('app-root'));

