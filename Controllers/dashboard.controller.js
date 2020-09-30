// module.exports = {
//     processLoadDashBoard: function (req, res) {
//         res.render('pageDashBoard', { title: 'Trang Chủ', isActive:0 });
//     },
//     processLogout: function (req, res) { 
//         req.session.userID = null;
//         res.redirect('/');
//     },
// }

class DashBoard {
    index(req, res) {
        res.render('pageDashBoard',
            {
                title: "Trang Chủ",
                isActive : 0
            })
    }
    handleLogOut(req, res) {
        req.session.userID = null;
        res.redirect('/');
    }
}
module.exports = new DashBoard