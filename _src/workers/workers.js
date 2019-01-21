self.addEventListener(
    "message",
    function(e) {
      self.postMessage(e.data);
    },
    false
);

import "babel-polyfill";

  