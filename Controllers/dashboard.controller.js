module.exports = {
    processLoadDashBoard: function (req, res) {
        res.render('pageDashBoard', { title: 'Trang Chủ', isActive:0 });
    },
    processLogout: function (req, res) { 
        req.session.userID = null;
        res.redirect('/');
    },
}