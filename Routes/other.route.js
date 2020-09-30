const express = require('express')
const router = express.Router();
const otherController = require('../Controllers/other.controller')


router.get('/', otherController.loadPageLogin)
    .post('/',otherController.processLogin)


module.exports = router