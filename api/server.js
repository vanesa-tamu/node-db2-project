const express = require('express');
const server = express();
server.use(express.json());

const cars = require('../car/carRouter.js');
server.use('/api/cars', cars);

module.exports = server;