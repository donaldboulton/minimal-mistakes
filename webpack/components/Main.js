import React, { Component } from 'react';

// eslint-disable-next-line
import Worker from 'worker-loader!./worker';

let w = new Worker();
w.postMessage('ping');
w.onmessage = (event) => {
  console.log(event.data);
};
