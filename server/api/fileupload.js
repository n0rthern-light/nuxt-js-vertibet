const { Router } = require('express')
const router = Router()
const misc = require('../misc')
const mongoose = require('mongoose')
const busboy = require('connect-busboy')
const fs = require('fs')

router.use(busboy())


router.post('/image', async (req, res, next) => {
  try {
    req.pipe(req.busboy)
    req.busboy.on('file', function (fieldname, file, filename) {
      fs.readdir('./static/img/', (err, files) => {
        let id = ((files ? files.length : 0) + 1)
        let extension = filename.split('.')[1]
        let newName = id + '.' + extension
        file.pipe(fs.createWriteStream('./static/img/' + newName))
        return res.json({ name: newName })
      })
    })
  } catch (e) {
    console.log(e)
    return res.json(false)
  }
})

module.exports = router