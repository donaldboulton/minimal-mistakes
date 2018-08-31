// inside src/index.js
import React from 'react';
import {render} from 'react-dom';
require('./server.js');

const App = () => {
 return <div>
  <h3>React App Running!</h3>
 </div>
}

render(
 <App/>,
 document.getElementById('root')
)
