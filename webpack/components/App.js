import React from "react";
import { render } from 'react-dom';

require("style-loader!.main.css");
require('./Site');
require("./Comments");
require("./Reviews");
require("./File");
export default class Hello extends Component {
    render() {
      return (
        <div>
          Hello Jekyll React
        </div>
      );
    }
  }

  render(<Hello />, document.getElementById('app'));
