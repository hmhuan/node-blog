const beverageService = require('../services/admin.service')

class AdminController {

    index(req, res) {
        res.render('admin')
    }

    async beverage(req, res) {
        try {
            const beverages = await beverageService.findAll()

            res.render('admin', {beverages})
        } catch {
            res.status(404)
        }
    }

    async findBeverageById(req, res) {
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

    async findBeverageBySlug(req, res) {
        try {
            const slug = req.params.slug
            const result = await beverageService.findBySlug(slug)
            const beverage = result.beverage
            if (beverage) {
                return res.status(200).json(beverage)
            }
            return res.status(404).json(result)
        } catch(err) {
            res.status(err.status).json({message: err.message})
        }
    }

    createBeverage(req, res, next) {
        res.render('beverages/create')
    }
}

module.exports = new AdminController;