class HomeRouter {
    index(req, res) {
        res.send(`Home page`)
    }
}

module.exports = new HomeRouter;