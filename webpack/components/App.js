import React from "react";
import { render } from 'react-dom';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require("style-loader!.main.css");
require("expose-loader?$!jquery");
require("script-loader!./Site.js");
require("script-loader!./Comments.js");
require("script-loader!./Reviews.js");
require("script-loader!./File.js");
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
