require('fs').readdirSync(__dirname).forEach(function (filename) {
  var match = filename.match(/^data-(.+)\.js$/);
  if (match != null) exports[match[1]] = require('./' + match[0]);
});
