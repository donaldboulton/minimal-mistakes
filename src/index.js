// inside src/index.js
import React from 'react';
import {render} from 'react-dom';
import App from "./App";
import main from "./main";

async function getComponent() {
   var element = document.createElement('div');
   const { default: _ } = await import('lodash');
   element.innerHTML = _.join(['Hello', 'react webpack'], ' ');
   return element;
}

