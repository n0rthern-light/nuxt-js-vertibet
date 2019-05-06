const { Router } = require('express')
const mongoose = require('mongoose')
const ModelActivities = mongoose.model('Activity')
const router = Router()

router.get('/get_activities', async (req, res, next) => {
  let activities = await ModelActivities.find().sort({createdAt : -1}).lean()
  return res.json(activities)
})

module.exports = router