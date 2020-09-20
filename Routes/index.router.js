const express = require('express')
const passport = require('passport')
const {isLogined} = require('../Middleware/auth')
const { loadLoginPage, processLogin } = require('../Controllers/index.controller')
const router = express.Router();

router.get('/',isLogined, loadLoginPage)
//       .post('/', passport.authenticate('local.login', {
//         failureRedirect: '/',
//         failureFlash: true,
// }), processLogin)
router.post('/',processLogin)
module.exports = router