// inside src/index.js
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Main from './components/Main';

class App extends Component {
    render() {
      return (
        <Main />
      )
    }
  }

  render(<App />, document.getElementById('style-3'));

