var express = require('express');
var app = express();
const sendMail = require('./public/sendMail');
app.use('/api/v1/communicate', sendMail);
