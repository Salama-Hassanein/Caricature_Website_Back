// author.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
