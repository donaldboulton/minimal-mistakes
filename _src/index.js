import React from 'react';
import './lib/components/css/Rapp.css';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
import Popup from './lib/components/Popup';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <AppNotify />
        <Dialog />
        <Popup />
      </div>
    );
  }
}

import './main.css';

