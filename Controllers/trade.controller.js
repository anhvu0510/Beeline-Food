class TradeController {
    index(req, res) {
        res.render('pageTrade', { title: "Doanh Thu", isActive: 2 })
    }
}
module.exports = new TradeController