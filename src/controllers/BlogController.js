class BlogController {
    index(req, res, next) {
        res.render('blog')
    }
}

module.exports = new BlogController;