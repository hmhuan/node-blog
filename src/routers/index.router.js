const homeRouter = require('./home.router')
const blogRouter = require('./blog.router')

function router(app) {
    app.use('/home', homeRouter)
    app.use('/blog', blogRouter)
    app.use('/', homeRouter)
}

module.exports = router;