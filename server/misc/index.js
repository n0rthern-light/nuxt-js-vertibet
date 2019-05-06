const bcrypt = require('bcrypt')
const saltRounds = 10
module.exports = {
  generateHashAndSalt: function (password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          resolve({ hash, salt })
        })
      })
    })
  },
  generateHashFromSalt: function (password, salt) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, function (err, hash) {
        resolve({ hash })
      })
    })
  }
}