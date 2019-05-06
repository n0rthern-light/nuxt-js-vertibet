const { Router } = require('express')
const userauth = require('./userauth')
const sockets = require('./sockets')
const admin = require('./admin')
const fileupload = require('./fileupload')

const router = Router()
router.use('/userauth', userauth)
router.use('/sockets', sockets)
router.use('/admin', admin)
router.use('/fileupload', fileupload)

module.exports = router