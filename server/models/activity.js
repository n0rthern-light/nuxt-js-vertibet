var mongoose = require('mongoose')

var schemaData = new mongoose.Schema({

  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

}, { timestamps: true })

var ModelActivity = mongoose.model('Activity', schemaData)
module.exports = ModelActivity