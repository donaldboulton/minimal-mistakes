import React, { Component } from "react";
import { render } from 'react-dom';

import url from 'style-loader!./assets/css/main.css';
import jquery from 'script-loader!./jquery';
import site from 'script-loader!./site';
import comments from 'script-loader!./comments';
import file from 'script-loader!./file';
import reviews from 'script-loader!./reviews';

export default class Hello extends Component {
    render() {
      return (
        <div>
          Hello from react
        </div>
      );
    }
  }

  render(<Hello />, document.getElementById('app'));
