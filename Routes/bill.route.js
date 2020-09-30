const express = require('express')

const route = express.Router();
const billControler = require('../Controllers/bill.controller')


route.get('/',billControler.index)


module.exports = route