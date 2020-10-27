const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userFavourites: {
    type: String,
    required: true
  },
  userCreated: {
    type: Date,
    required: true,
    default: Date.now()
  }
})


module.exports = mongoose.model('User', userSchema)