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
const otherRoute = require('./other.route')
const dashboardRoute = require('./dashboard.route')
const productRoute = require('./product.route')
const receiptRoute = require('./receipt.route')
const tradeRoute = require('./trade.route')
const issueRoute = require('./issue.route')
const billRoute = require('./bill.route')

const { isLogin,isLogined } = require('../Middleware/auth')
module.exports = {
    Router: function Router(app) {
        app.use('/', otherRoute);
        app.use(isLogin)
        app.use('/trang-chu', dashboardRoute);
        app.use('/san-pham', productRoute);
        app.use('/doanh-thu', tradeRoute);
        app.use('/nhap-kho', receiptRoute);
        app.use('/xuat-kho', issueRoute);
        app.use('/don-hang', billRoute);

    }
}

