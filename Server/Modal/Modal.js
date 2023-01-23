const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  bills: {
    type: Array,
  },
  income: {
    type: Array,
  },
  total: {
    type: Number,
  },
  bufferCommands: false,
  autoCreate: false,
});

const collectionName = 'users';
const UserModel = mongoose.model('User', user, collectionName);

module.exports = UserModel;
