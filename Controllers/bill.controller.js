class BillController {
    index(req, res) {
        res.render('pageBill', { title: "Đơn Hàng", isActive: 5 })
    }
}
module.exports = new BillController