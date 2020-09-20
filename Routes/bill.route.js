const express = require('express')

const { processLoadPage } = require('../Controllers/bill.controller');
const router = express.Router();



router.get('/', processLoadPage)


module.exports = router