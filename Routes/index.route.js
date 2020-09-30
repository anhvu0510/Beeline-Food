// const express = require('express')
// const passport = require('passport')
// const {isLogined} = require('../Middleware/auth')
// const { loadLoginPage, processLogin } = require('../Controllers/index.controller')
// const router = express.Router();

// router.get('/',isLogined, loadLoginPage)
// //       .post('/', passport.authenticate('local.login', {
// //         failureRedirect: '/',
// //         failureFlash: true,
// // }), processLogin)
// router.post('/',processLogin)
// module.exports = router
const { isLogin } = require('../Middleware/auth')
module.exports = {
    Router : function Router(app) {
    app.use('/', require('./other.route'))
    // app.use(isLogin)
    // app.use('/trang-chu', require('./Routes/dashboard.route'))
    // app.use('/san-pham', require('./Routes/product.route'))
    // app.use('/doanh-thu', require('./Routes/trade.route'))
    // app.use('/nhap-kho', require('./Routes/receipt.route'))
    // app.use('/xuat-kho', require('./Routes/issue.route'))
    // app.use('/don-hang', require('./Routes/bill.route'))
}
}

