var mongoose = require('mongoose')

var schemaData = new mongoose.Schema({

  name: { type: String, default: undefined },
  id_category: {type: mongoose.Types.ObjectId, required: true, ref: 'Category'},
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  team_a: { type: mongoose.Types.ObjectId, required: true, ref: 'Team' },
  team_b: { type: mongoose.Types.ObjectId, required: true, ref: 'Team' },
  match_result: { type: Number, default: undefined }

}, { timestamps: true })

var ModelGame = mongoose.model('Game', schemaData)
module.exports = ModelGame