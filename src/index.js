// inside src/index.js
import React from 'react';
import {render} from 'react-dom';
require('./assets/vendor/notifications/admin.js');
require('./assets/vendor/notifications/notifications.js');
require('./server.js');
require('./main.js');

const App = () => {
 return <div>
  <h3>React App Running!</h3>
 </div>
}

render(
 <App/>,
 document.getElementById('root')
)
