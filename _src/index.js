import React from 'react';
import './lib/components/css/Rapp.css';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Menu from './lib/components/Menu';

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
        <Todo />
        <AppNotify />
        <Menu />
        {/* <Footer/> */}
      </div>
    );
  }
}

import './main.css';

