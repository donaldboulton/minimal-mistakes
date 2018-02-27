// results.js
$(function (Query, utils) {
  var query = new Query(),
    site = location.protocol + "//" + location.host,
    // some utility functions
    utils = utils;

  query
    .setFromURL('query')
    .getJSON('/posts.json')
    .done(function (data) {
      console.log(data);
      // show our results
    });
}(Query, utils));