import React from "react";
import ReactDom from 'react-dom';
import apollo from "./lib/components/images/apollo.svg";
import Worker from 'worker-loader!./worker';
import WebWorker from "react-webworker";

const worker = new Worker();
 
worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};
 
worker.addEventListener("message", function (event) {});
  
const LambdaDemo = () => (
    <WebWorker url="/assets/9ad10eae928b064c486b.worker.js">
      <WebWorker.Pending>
        {({ postMessage }) => <button className="text-center btn btn--primary" onClick={() => postMessage("hello")}>GraphQL Hello</button>}
      </WebWorker.Pending>
      <WebWorker.Data>
        {data => (
          <div>
          <header className="Appheader">
            <img src={apollo} className="align-center" alt="logo" />
            <h3 className="Appheader">GraphQL Lambda</h3>
          </header>
            <strong>Received some data:</strong>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </WebWorker.Data>
      <WebWorker.Error>{error => `Something went wrong: ${error.message}`}</WebWorker.Error>
    </WebWorker>
  )
  ReactDom.render(<LambdaDemo />, document.getElementById('graph'));