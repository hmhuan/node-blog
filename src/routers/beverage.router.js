const express = require('express')
const beverageController = require('../controllers/BeverageController')
const router = express.Router()

router.get('/detail/:slug', beverageController.findBySlug)
router.get('/:id', beverageController.findById)
router.get('/', beverageController.index)

module.exports = router