const User = require('../Models/user.model')

class OtherController {
    loadPageLogin(req, res) {
        res.render('pageLogin', { title: 'Đăng Nhập' })
    }
    async processLogin(req, res,next) {
        try {
            const { username, password } = req.body
            const Found = await User.findOne({ where: { user_name: username } })
            if (!Found) {
                req.flash('error_msg', 'Tên Đăng Nhập Không Tồn Tại')
                console.log(User.hashPassword('123456789    '));
                res.redirect('/')
            } else if (!User.confirmPassword(password, Found.password)) {
                req.flash('error_msg', 'Mật Khẩu Không Chính Xác')
                res.redirect('/')
            } else {
                req.session.userID = Found.id
                res.redirect('/trang-chu');
            }
        } catch (error) {
            next(error,{mess : 'Fail to login'})
        }
    }
}
module.exports = new OtherController