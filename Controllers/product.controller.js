module.exports = {
    processLoadPage: (req, res) => {
        res.render('pageProduct', { title: "Sản Phẩm", isActive: 1})
    }
}