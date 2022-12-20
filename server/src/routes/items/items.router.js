const express = require('express');
const { httpGetAllItems, httpAddNewItem } = require('./items.controller')

const ItemsRouter = express.Router();

ItemsRouter.get('/', httpGetAllItems);
ItemsRouter.post('/', httpAddNewItem);

module.exports = ItemsRouter;