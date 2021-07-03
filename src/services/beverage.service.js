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
        
        return Beverage.findById(req.params.id)
            .then(beverage => {
                if (beverage) {
                    return res.json(beverage)
                }
                return res.status(404).json({message: "Not found"})
            })
            .catch(error => {
                console.log(`error`)
                return res.status(400).json({message: "Bad request"})
            })
    }
}

module.exports = new BeverageService