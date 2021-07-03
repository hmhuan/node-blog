const homeRouter = require('./home.router')
const blogRouter = require('./blog.router')
const beverageRouter = require('./beverage.router')

function router(app) {
    app.use('/home', homeRouter)
    app.use('/beverage', beverageRouter)
    app.use('/blog', blogRouter)
    app.use('/', homeRouter)
}

module.exports = router;