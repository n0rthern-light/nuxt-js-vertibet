var mongoose = require('mongoose')

var schemaData = new mongoose.Schema({

  name: { type: String, required: true },
  logo: { type: String },
  won_count: {type: Number, default: 0 },
  loss_count: {type: Number, default: 0 },
  draw_count: {type: Number, default: 0 }

}, { timestamps: true })

var ModelTeam = mongoose.model('Team', schemaData)
module.exports = ModelTeam