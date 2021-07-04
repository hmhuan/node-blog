const Beverage = require('../models/Beverage')
const mongooseUtil = require('../utils/mongoose.util')
class BeverageService {
    findAll() {
        return Beverage.find({})
         .then(beverages => mongooseUtil.mapObjects(beverages))
    }

    findById(id) {
        
        return Beverage.findById(id)
            .then(beverageItem => {
                if (beverageItem) {
                    return {beverage:  mongooseUtil.mapObject(beverageItem)}
                }
                return {message: "Not found"}
            })
            .catch(error => {
                console.log(`${error}`)
                throw {status: 400, message: "Bad request"}
            })
    }
}

module.exports = new BeverageService