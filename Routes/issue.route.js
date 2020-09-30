const express = require('express')

const issueController = require('../Controllers/issue.controller')

const route = express.Router();

route.get('/',issueController.index)




module.exports = route