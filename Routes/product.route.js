const express = require('express')

const productController = require('../Controllers/product.controller')

const route = express.Router();

route.get('/', productController.index)
route.get('/:id/chi-tiet', productController.handleDetail)
route.get('/:id/cap-nhat', productController.handleUpdate)
route.get('/:id/khoa', productController.handleLock)
route.get('/:id/mo-khoa', productController.handleUnLock)





module.exports = route