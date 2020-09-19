const db = require('../Service/db.config')
const User = require('../Models/user.model');
const { raw } = require('body-parser');
module.exports = {
    loadLoginPage: function (req, res) {
        res.render('pageLogin', { title: 'Login' });
    },
    processLogin: function (req, res) {
        res.redirect('/dash-board');
    }

}
