const items = require('./items.mongo');

async function getAllItems() {
  return await items.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestItemNumber() {
  const latestItem = await items.
  findOne()
  .sort('-itemNumber');

  if (!latestItem) return 1;

  return latestItem.itemNumber;
}

async function saveItem(item) {
  await items.findOneAndUpdate( 
    { itemNumber: item.itemNumber },
    item, 
    { upsert: true }
  )
}

async function createItem(item) {
  const newItemNumber = await getLatestItemNumber() + 1;
  const newItem = Object.assign(item,
    {
    itemNumber: newItemNumber,
  });
  await saveItem(newItem);
}

async function findItem(filter) {
  return await items.findOne(filter);
}

async function ifExistItem(id) {
  return await findItem({itemNumber: id});
}

async function deleteItem(itemId) {
  await items.deleteOne({itemNumber: itemId})
}

module.exports = {
  getAllItems,
  createItem,
  deleteItem,
  ifExistItem,
}