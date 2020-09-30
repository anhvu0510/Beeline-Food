const express = require('express')

const router = express.Router();
const dashBoardController = require('../Controllers/dashboard.controller')


router.get('/', dashBoardController.index)
router.get('/log-out',dashBoardController.handleLogOut)


module.exports = router