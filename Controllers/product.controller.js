class ProductController {
    index(req, res) {
        res.render('pageProduct', { title: "Sản Phẩm", isActive: 1 })
    }
}
module.exports = new ProductController