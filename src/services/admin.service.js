const mongooseUtil = require('../utils/mongoose.util')
const beverageService = require('./beverage.service')

class AdminService {
    findAll() {
        return beverageService.findAll()
    }

    findById(id) {
        return beverageService.findById(id)
    }

    findBySlug(slug) {
        return beverageService.findBySlug(slug)
    }
}

module.exports = new AdminService