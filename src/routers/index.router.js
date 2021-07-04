const homeRouter = require('./home.router')
const blogRouter = require('./blog.router')
const beverageRouter = require('./beverage.router')
const foodRouter = require('./food.router')
const adminRouter = require('./admin.router')

function router(app) {
    app.use('/home', homeRouter)
    app.use('/v1/beverages', beverageRouter)
    app.use('/v1/foods', foodRouter)
    app.use('/blog', blogRouter)
    app.use('/admin', adminRouter)
    app.use('/*', homeRouter)
}

module.exports = router;