const fs = require('fs');
const { getAllItems, createItem } = require('../../models/items/items.model');

async function httpGetAllItems(req, res) {
  const items = await getAllItems()
  return res.status(200).json(items);
}

async function httpAddNewItem(req, res) {
  const item = req.body;

  if (!item.itemName) {
    return res.status(400).json({
      error: 'Missing required item name'
    })
  }

  if (!item.quantity) {
    return res.status(400).json({
      error: 'Missing required item quantity'
    })
  }

  if (!item.price) {
    return res.status(400).json({
      error: 'Missing required item price'
    })
  }

  await createItem(item);
  return res.status(201).json(item);
}

module.exports = {
  httpGetAllItems,
  httpAddNewItem
}