module.exports = {
    processLoadPage: (req, res) => {
        res.render('pageReceipt', { title: "Nhập Kho", isActive: 3 })
    }
}