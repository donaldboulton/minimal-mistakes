import React from "react";

import 'assets/css/main.css';
import $ from 'jquery';
import Comments from './Comments';
import Reviews from './Reviews';
import File from './File';
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
