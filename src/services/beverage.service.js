const Beverage = require('../models/Beverage')

class BeverageService {
    findAll() {
        return Beverage.find({})
    }

    findById(id) {
        
        return Beverage.findById(id)
            .then(beverageItem => {
                if (beverageItem) {
                    return {beverage: beverageItem}
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