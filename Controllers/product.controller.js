class ProductController {
    index(req, res) {
        res.render('pageProduct', { title: "Sản Phẩm", isActive: 1 })
    }
    handleDetail(req, res) {
        const id = req.params.id
        console.log('Hien Thi San Pham');
        res.render('Partials/frmDetailProduct',{data : 'CHI TIET SAN PHAM'})
    }
    handleUpdate(req, res) {
        const id = req.params.id
        console.log('Cap nhat san pham');
        res.render('Partials/frmDetailProduct', { data: 'Cap Nhat San Pham' })
    }
    handleLock(req, res) {
        const id = req.params.id
        console.log('Khoa San Pham',id);
        res.send('Khoa San Pham')
    }
    handleUnLock(req, res) {
        const id = req.params.id
        console.log('Mo Khoa San Pham',id);
        res.send('Mo Khoa San Pham')
    }
}
module.exports = new ProductController