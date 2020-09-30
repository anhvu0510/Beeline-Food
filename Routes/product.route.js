const express = require('express')

const productController = require('../Controllers/product.controller')

const route = express.Router();

route.get('/', productController.index)




module.exports = route