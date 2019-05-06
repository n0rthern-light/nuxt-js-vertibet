var mongoose = require('mongoose')

var schemaData = new mongoose.Schema({

  name: { type: String, required: true },
  id_parent: { type: mongoose.Types.ObjectId, default: null, ref: 'Category' },

}, { timestamps: true })

var ModelCategory = mongoose.model('Category', schemaData)
module.exports = ModelCategory