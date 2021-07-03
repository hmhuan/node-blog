const Beverage = require('../models/Beverage')

class BeverageService {
    findAll(req, res, next) {
        Beverage.find({})
        .then(beverages => res.json(beverages))
        .catch(next)
    }
}

module.exports = new BeverageService