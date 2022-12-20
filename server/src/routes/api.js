const express = require('express');

const itemsRouter = require('./items/items.router');

const api = express.Router();

api.use('/items', itemsRouter);

module.exports = api;
