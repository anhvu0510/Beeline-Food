const express = require('express')

const tradeController = require('../Controllers/trade.controller')

const route = express.Router();

route.get('/', tradeController.index)


module.exports = route