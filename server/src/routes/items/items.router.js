const express = require('express');
const { httpGetAllItems, httpAddNewItem, httpDeleteItem } = require('./items.controller')

const itemsRouter = express.Router();

itemsRouter.get('/', httpGetAllItems);
itemsRouter.post('/', httpAddNewItem);
itemsRouter.delete('/:id', httpDeleteItem);

module.exports = itemsRouter;