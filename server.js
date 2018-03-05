var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
});
var port = process.argv[2] || 3000;
app.listen(port);
console.log('app listening on port ' + port);