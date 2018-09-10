import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>Hey, y’all!! This is a react component.</div>
    )
  }
}
export default App;

import url from 'style-loader!./assets/css/main.css';

import jquery from 'script-loader!./jquery';

import site from 'script-loader!./site';

import comments from 'script-loader!./comments';

import file from 'script-loader!./file';

import reviews from 'script-loader!./reviews';
