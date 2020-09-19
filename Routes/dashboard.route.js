const express = require('express')
const { isLogin } = require('../Middleware/auth')
const { processLogout,processLoadDashBoard} = require('../Controllers/dashboard.controller');
const router = express.Router();


router.use(isLogin)
router.get('/',processLoadDashBoard)


module.exports = router