const express = require('express');
const app = express();
const sendMail = require('./public/sendMail');
app.use('/api/v1/communicate', sendMail);
