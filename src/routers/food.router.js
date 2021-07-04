const express = require('express')
const foodController = require('../controllers/FoodController')
const router = express.Router()

router.get('/',foodController.index)

module.exports = router