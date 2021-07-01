class HomeRouter {
    index(req, res) {
        res.render('home')
    }
}

module.exports = new HomeRouter;