const beverageService = require('../services/beverage.service')

class BeverageController {
    index(req, res, next) {
        return beverageService.findAll(req, res, next)
    }

    find(req, res, next) {
        return beverageService.findById(req, res, next)
    }
}

module.exports = new BeverageController;