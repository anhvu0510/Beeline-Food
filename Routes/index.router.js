const express = require('express')
const passport = require('passport')
const {loadLoginPage,processLogin} = require('../Controllers/index.controller')
const router = express.Router();

router.get('/', loadLoginPage)
    .post('/', passport.authenticate('local.login', {
        failureRedirect: '/',
        failureFlash: true,
    }),processLogin)


module.exports = router