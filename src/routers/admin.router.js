const express = require('express')
const adminController = require('../controllers/AdminController')
const router = express.Router()

router.get('/beverages/create', adminController.createBeverage)
router.get('/', adminController.index)

module.exports = router