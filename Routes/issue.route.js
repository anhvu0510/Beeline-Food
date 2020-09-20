const express = require('express')
const { isLogin } = require('../Middleware/auth')
const { processLoadPage } = require('../Controllers/issue.controller');
const router = express.Router();



router.get('/', processLoadPage)


module.exports = router