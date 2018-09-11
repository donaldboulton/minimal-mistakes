import React from "react";
import { render } from 'react-dom';

import style from 'main.css';

require("expose-loader?$!jquery");
require("script-loader!./Site.js");
require("script-loader!./Comments.js");
require("script-loader!./Reviews.js");
require("script-loader!./File.js")
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
