var mongoose = require('mongoose')

var schemaData = new mongoose.Schema({

  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  username: {type: String },
  isAdmin: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },

}, { timestamps: true })

var ModelActivity = mongoose.model('User', schemaData)
module.exports = ModelActivity