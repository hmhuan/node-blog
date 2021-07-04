const beverageService = require('../services/beverage.service')

class BeverageController {

    async index(req, res) {
        try {
            const beverages = await beverageService.findAll()

            res.render('beverage', {beverages})
        } catch {
            res.status(404)
        }
    }

    async find(req, res) {
        try {
            const id = Number(req.params.id)
            const result = await beverageService.findById(id)
            const beverage = result.beverage
            if (beverage) {
                return res.status(200).json(beverage)
            }
            return res.status(404).json(result)
        } catch(err) {
            res.status(err.status).json({message: err.message})
        }
    }
}

module.exports = new BeverageController;