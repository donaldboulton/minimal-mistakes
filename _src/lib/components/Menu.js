import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown/Dropdown';

//ReactDOM.render(<App />, document.getElementById('root'));

var displayDropdown = React.createElement(
  'div',
  null,
  React.createElement(Dropdown, null)
);

ReactDOM.render(displayDropdown, document.getElementById('menu'));
