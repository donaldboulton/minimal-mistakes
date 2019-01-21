"use strict";

onmessage = function(event) {  
  var params = JSON.parse(event.data);
  postMessage("thanks - I got the data");
};

import "babel-polyfill";

  