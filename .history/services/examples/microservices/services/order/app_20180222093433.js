const express = require('express'),
  API = require('./entry-points/orderAPI'),
  MQSubscriber = require('./entry-points/orderMQSubscriber');

console.log(`App is currently starting`);

let app = express();


module.exports = app;