const express = require('express')

const receiptController = require('../Controllers/receipt.controller')

const route = express.Router();

route.get('/', receiptController.index)




module.exports = route