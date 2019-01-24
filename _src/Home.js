import React, { Component } from "react";
import ReactDom from 'react-dom';
import apollo from "./lib/components/images/apollo.svg";
import Worker from 'worker-loader!./worker';

const worker = new Worker();
 
worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};
 
worker.addEventListener("message", function (event) {});

class Home extends Component {
    render() {
      return (
        <div className="AppCenter">
          <header className="Appheader">
            <img src={apollo} className="App-Logo align-center" alt="logo" />
            <h3 className="Appheader">GraphQL Lambda</h3>
          </header>
          <p className="AppCentermain">
          <Worker />
          </p>          
        </div>
      );
    }
  }
  
  ReactDom.render(<Home />, document.getElementById('graph'));