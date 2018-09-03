import React, { Component } from 'react';
import {render} from 'react-dom';
import Main from './components/Main';
import Worker from './components/Worker';
class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}

render(<App />, document.getElementById('root'));
