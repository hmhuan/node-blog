const Food = require('../models/Food')

class FoodService {
    findAll(req, res, next) {
        Food.find({})
        .then(foods => {
            if (foods.length == 0) 
            {
                return res.status(404).json({message: "No foods"})
            }
            return res.json(foods)
        })
        .catch(next)
    }
}

module.exports = new FoodService