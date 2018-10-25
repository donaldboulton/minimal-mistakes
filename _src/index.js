import React, { Component } from 'react';
import './lib/components/css/Rapp.css';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import ReactChatSlack from './lib/components/ReactChatSlack.js';

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

class Title extends React.Component{
  render(){
    return(
    <h3> Jekyll React Components </h3>
    )
  }
}
class Footer extends React.Component {
  render(){
    return (
    <footer>Adding Footer</footer>
    );
  }
}
class Header extends React.Component {
  render(){
    return (
    <Title />
    );
  }
}
class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Todo/>
        <AppNotify/>
        <ReactChatSlack/>
        <Footer/>
      </div>
    );
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Layout/>,app)

class LayoutList extends React.Component {
  render(){
    var list = [
      <Header/>,
      <Todo/>,
      <AppNotify/>,
      <Footer/>,
    ];
    return (
    <u1>
        {list}
        </u1>
    );
  }
}

import './main.css';
