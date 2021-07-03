const express = require('express')
const foodController = require('../controllers/FoodController')
const router = express.Router()

router.route('/').get(foodController.index)

module.exports = router