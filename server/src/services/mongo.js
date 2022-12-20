const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://sanja:HnLzZHx8cwKGZBa1@cluster0.gib5zuc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
})
mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function mongoConnect() {
  return await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  return await mongoose.disconnect();
}

module.exports = {
  mongoConnect, mongoDisconnect
}