const beverageService = require('../services/beverage.service')

class BeverageController {
    index(req, res, next) {
        beverageService.findAll(req, res, next)
    }
}

module.exports = new BeverageController;