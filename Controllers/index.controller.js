const db = require('../Service/db.config')
const User = require('../Models/user.model');
const { raw } = require('body-parser');
const { isLogin } = require('../Middleware/auth');
module.exports = {
    loadLoginPage: function (req, res) {
        res.render('pageLogin', { title: 'Đăng Nhập' });
    },
    processLogin: async function (req, res) {
        const { username, password } = req.body
        const Found = await User.findOne({ where: { user_name: username } })
        if (!Found) {
            req.flash('error_msg', 'Tên Đăng Nhập Không Tồn Tại')
            res.redirect('/')
        } else if (!User.confirmPassword(password,Found.password)) {
            req.flash('error_msg','Mật Khẩu Không Chính Xác')
            res.redirect('/')
        } else {
            req.session.userID = Found.id
            res.redirect('/trang-chu');
        }
        
    }

}
