import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import Dialog from './lib/components/Dialog';
import Worker from 'worker-loader!./workers/Workers';

export default () => {
  const element = document.createElement("h1");
  const worker = new Worker();
  const state = { text: "foo" };

  worker.addEventListener("message", ({ data: { text } }) => {
    state.text = text;
    element.innerHTML = text;
  });

  element.innerHTML = state.text;
  element.onclick = () => worker.postMessage({ text: state.text });

  return element;
};
class App extends React.Component {
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

import './main.css';

export default App;