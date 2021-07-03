const express = require('express')
const beverageController = require('../controllers/BeverageController')
const router = express.Router()

router.route('/').get(beverageController.index)

module.exports = router