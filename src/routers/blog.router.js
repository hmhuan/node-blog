const express = require('express')
const router = express.Router()
const blogController = require('../controllers/BlogController')

router.route('/').get(blogController.index)

module.exports = router