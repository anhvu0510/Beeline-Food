module.exports = {
    isLogin: (req, res, next) => {
        if (!req.session.userID) {
            req.flash('error_msg','Vui Lòng Đăng Nhập')
            return res.redirect('/')
        }
        next()
    },
    isLogined: (req, res, next) => {
        if (req.session.userID) {
            return res.redirect('/trang-chu')
        }
        next()
    }
}