//Create a module using an IIFE

; (function (global, $) {
  /*
    Put ourselves into "strict" mode
    This just helps us write cleaner JavaScript
  */
  'use strict';

  Query.prototype = {
    // this.q is our search query (for example, "javascript tutorial")
    set: function (val) {
      this.q = val;
      return this;
    },
    // brings us to our search page with a query string attached
    goToLocation: function (route) {
      if (typeof this.q !== 'undefined' && typeof this.q === 'string') {
        document.location.href = route + '/?query=' + this.q;
      } else {
        return;
      }
    },
    // returns our search query (for example, "javascript tutorial")
    get: function () {
      return this.q;
    },
    // "grab" the query from the query string in the URL and set this.q to it
    setFromURL: function (name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);

      this.q = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

      return this;
    },
    // a wrapper for jQuery's $.get
    getJSON: function (file) {
      return $.get(file);
    }
  };

  // when we initialize a query, we have the option of giving it a query string
  function Query(q) {
    if (typeof q !== 'undefined' && typeof q === 'string') {
      this.q = q;
    }
  }

  // attach the Query object to the window
  global.Query = Query;
})(this, $);