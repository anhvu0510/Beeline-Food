module.exports = {
    processLoadDashBoard: function (req, res) {
        res.render('pageDashBoard', { title: 'Login' });
    },
    processLogout: function (req, res) { 
        req.logOut();
        res.redirect('/');
    },
}