import React, { Component } from "react";
import ReactDom from 'react-dom';
import apollo from "./lib/components/images/apollo.svg";
import Worker from 'worker-loader!./worker';

const worker = new Worker();
 
worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};
 
worker.addEventListener("message", function (event) {});

class LambdaDemo extends Component {
    render() {
      return (
        <div className="AppCenter">
          <header className="Appheader">
            <img src={apollo} className="align-center" alt="logo" />
            <h3 className="Appheader">GraphQL Lambda</h3>
          </header>
          <p className="App-intro">
            Netlify Functions
          </p>          
        </div>
      );
    }
  }
  
  ReactDom.render(<LambdaDemo />, document.getElementById('graph'));