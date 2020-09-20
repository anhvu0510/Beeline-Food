module.exports = {
    processLoadPage: (req, res) => {
        res.render('pageTrade', { title: "Doanh Thu", isActive: 2 })
    }
}