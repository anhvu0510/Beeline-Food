const express = require('express')
const router = express.Router();
const {isLogined} = require('../Middleware/auth')
const otherController = require('../Controllers/other.controller')


router.get('/',isLogined, otherController.loadPageLogin)
    .post('/',otherController.processLogin)


module.exports = router