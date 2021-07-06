const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  // user information
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  // link to the avatar
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /(https?:\/\/)(www\.)?\S+/ig.test(v);
      },
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
