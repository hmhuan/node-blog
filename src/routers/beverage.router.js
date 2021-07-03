const express = require('express')
const beverageController = require('../controllers/BeverageController')
const router = express.Router()

router.get('/:id', beverageController.find)
router.get('/', beverageController.index)

module.exports = router