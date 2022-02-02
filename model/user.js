const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: [
      ({ length }) => length >= 6,
      'Password must be at least 6 characters long.'
    ]
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
