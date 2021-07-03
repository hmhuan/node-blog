class HomeRouter {
    index(req, res, next) {
        res.render('home')
    }
}

module.exports = new HomeRouter;