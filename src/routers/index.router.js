const homeRouter = require('./home.router')

function router(app) {
    app.use('/home', homeRouter)
    app.use('/', homeRouter)
}

module.exports = router;