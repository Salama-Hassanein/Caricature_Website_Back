// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: `http://localhost:5000/assets/upload/default-image.jpg`
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_admin: {
    type: Boolean,
    default: false
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
