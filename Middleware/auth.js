module.exports = {
    isLogin: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return res.redirect('/')
        }
        return next()
    }
}