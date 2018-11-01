import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown/Dropdown';

//ReactDOM.render(<App />, document.getElementById('root'));

var displayDropdown = (
      <div>
        <Dropdown />
      </div>
      );

ReactDOM.render(displayDropdown, document.getElementById('menu'));
