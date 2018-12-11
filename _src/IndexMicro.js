const { send } = require('micro');
const url = require('url');
const level = require('level');
const promisify = require('then-levelup');

const db = promisify(level('visits.db', {
  valueEncoding: 'json'
}))

const micro = require('./Micro');
micro('./Server.js');
