const mongoose = require('mongoose')
require('../models')

const config = {
  MONGODB_HOST: 'mongodb+srv://admin:kEqAOB6rJApDvpfx@cluster0-ygvox.mongodb.net/test?retryWrites=true',
  MONGODB_OPTIONS: {
    dbName: 'test',
    user: 'admin',
    pass: 'kEqAOB6rJApDvpfx',
    ssl: true
  }
}

module.exports = function () {
  'Connecting to database...'
  mongoose.Promise = global.Promise
  return mongoose.connect(config.MONGODB_HOST, config.MONGODB_OPTIONS)
}