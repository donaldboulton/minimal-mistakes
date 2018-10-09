import React, { Component } from 'react';
import './lib/components/css/Rapp.css';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import ContactForm from './lib/components/ContactForm';
class Title extends React.Component{
  render(){
    return(
    <h3>Jekyll React Components</h3>
    )
  }
}
class Footer extends React.Component{
  render(){
    return (
    <footer>Adding Footer</footer>
    );
  }
}
class Header extends React.Component{
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
        <Header />
        <Main/>
        <ContactForm />
        <AppNotify/>
        <Footer/>
      </div>
    );
  }
}
const app = document.getElementById('app')
ReactDOM.render(<Layout/>,app)

class LayoutList extends React.Component{
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
import './InitSite';
import './Init.Firebase';
import '../node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js';
import '../node_modules/github-card/dist/widget.js';
import '../node_modules/default-passive-events/dist/index.js';
require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');
