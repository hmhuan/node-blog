const Beverage = require('../models/Beverage')

class BeverageService {
    findAll(req, res, next) {
        Beverage.find({})
        .then(beverages => {
            if (beverages.length === 0) {
                return res.status(404).json({message: `No beverage`})
            }
            return res.json({ 
                number: beverages.length, 
                page: 0,
                "beverages": beverages
            })
        })
        .catch(next)
    }

    findById(req, res, next) {
        // return res.json({message: `find by id: ${req.params.id}`})
        Beverage.findById({_id: req.params.id})
        .then(beverage => {
            if (beverage) {
                return res.json(beverage)
            }
            return res.status(404).json({message: "Not found"})
        })
        .catch(next)
    }
}

module.exports = new BeverageService