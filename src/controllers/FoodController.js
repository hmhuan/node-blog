const foodService = require('../services/food.service')

class FoodController {
    index(req, res, next) {
        foodService.findAll(req, res, next)
    }
}

module.exports = new FoodController;