const fs = require('fs');
const { getAllItems, createItem, deleteItem, ifExistItem } = require('../../models/items/items.model');

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
  const items = await getAllItems()
  return res.status(201).json(items);
}

async function httpDeleteItem(req, res) {
  const itemId = Number(req.params.id);
  const existItem = await ifExistItem(itemId)
  if (!existItem) {
    return res.status(404).json({
      error: 'Item not found'
    })
  }
  await deleteItem(itemId);
  const items = await getAllItems()
  return res.status(202).json(items);
}

module.exports = {
  httpGetAllItems,
  httpAddNewItem,
  httpDeleteItem,
}