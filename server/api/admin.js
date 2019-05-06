const { Router } = require('express')
const mongoose = require('mongoose')
const ModelCategory = mongoose.model('Category')
const ModelTeam = mongoose.model('Team')
const ModelGame = mongoose.model('Game')
const router = Router()

router.get('/category/get_categories', async (req, res, next) => {
  let categories = await ModelCategory.find().lean()
  return res.json(categories)
})

router.post('/category/add_category', async (req, res, next) => {
  const newCat = req.body
  let newCatDb = new ModelCategory()
  newCatDb = Object.assign(newCatDb, newCat)
  await newCatDb.save()
  console.log(newCatDb)
  return res.json(true)
})

router.get('/team/get_teams', async (req, res, next) => {
  let teams = await ModelTeam.find().lean()
  return res.json(teams)
})

router.post('/team/add_team', async (req, res, next) => {
  const newTeam = req.body
  let newTeamDb = new ModelTeam()
  newTeamDb = Object.assign(newTeamDb, newTeam)
  await newTeamDb.save()
  console.log(newTeamDb)
  return res.json(true)
})

module.exports = router