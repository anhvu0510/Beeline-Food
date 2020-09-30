class ReceiptController {
    index(req, res) {
        res.render('pageReceipt', { title: "Nhập Kho", isActive: 3 })
    }
}
module.exports = new ReceiptController