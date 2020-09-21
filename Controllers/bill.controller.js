module.exports = {
    processLoadPage: (req, res) => {
        res.render('pageBill', { title: "Đơn Hàng", isActive: 5})
    },
}