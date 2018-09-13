import React from "react";
import { render } from 'react-dom';
import './main.css';
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
