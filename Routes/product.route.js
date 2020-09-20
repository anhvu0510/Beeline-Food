const express = require('express')
const { isLogin } = require('../Middleware/auth')
const {processLoadPage} = require('../Controllers/product.controller');
const router = express.Router();



router.get('/', processLoadPage)


module.exports = router