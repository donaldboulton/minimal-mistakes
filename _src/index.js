import React, { Component } from 'react';
import { render } from 'react-dom';
import './lib/components/css/Rapp.css';
import Main from './lib/components/Main';
import AppNotify from './lib/components/AppNotify';
class Title extends React.Component{
  render(){
    return(
    <h1>Welcome Jekyll React</h1>
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
      <Main/>,
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

const appList = document.getElementById('app');
ReactDOM.render(<LayoutList/>, appList)

import './main.css';
import './InitSite';
import './Init.Firebase';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/jqueryooth-scroll/jquery.smooth-scroll.js';
require('file-upload-with-preview');
require('lazysizes');
require('svg4everybody');

require('default-passive-events');
