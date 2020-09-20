const express = require('express')
const { isLogin } = require('../Middleware/auth')
const { processLogout,processLoadDashBoard} = require('../Controllers/dashboard.controller');
const router = express.Router();



router.get('/', processLoadDashBoard)
router.get('/log-out',processLogout)


module.exports = router