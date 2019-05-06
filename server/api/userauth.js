const { Router } = require('express')
const router = Router()
const misc = require('../misc')
const mongoose = require('mongoose')
const UserModel = mongoose.model('User')

router.get('/loginstate', async (req, res, next) => {
  return res.json(req.session.user ? { user: req.session.user } : false)
})

router.get('/logout', async (req, res, next) => {
  req.session.user = null
})

router.post('/login', async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    console.log('1')
    return res.json(false)
  }

  let user = await UserModel.findOne({ email: req.body.email })

  if (!user) {
    console.log('2')
    return res.json(false)
  }

  let userSalt = user.salt
  let { hash } = await misc.generateHashFromSalt(req.body.password, userSalt)

  let userMatchinPass = await UserModel.findOne({email: req.body.email, hash: hash, salt: userSalt })
  if (!userMatchinPass) {
    console.log('3')
    return res.json(false)
  }
  req.session.user = userMatchinPass
  return res.json({ user: userMatchinPass })
})

router.post('/register', async (req, res, next) => {
  let {email, username, pass1, pass2} = req.body
  if (!email || !pass1 || !pass2 || pass1 !== pass2) {
    return res.json(false)
  }
  let { hash, salt } = await misc.generateHashAndSalt(pass1)
  let user = new UserModel()
  user.hash = hash
  user.salt = salt
  user.isAdmin = false
  user.username = username.length ? username : email.split('@')[0]
  user.email = email
  await user.save()
  console.log(user)

  return res.json(user)
})
module.exports = router