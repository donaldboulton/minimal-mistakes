import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <AppNotify />        
        <Dialog />
      </div>
    );
  }
}

import './main.min.css';
