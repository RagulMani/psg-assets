const path = require('path');
var express = require('express');
var router = express.Router();
var appLogger = require('../logging/appLogger');
var bypassId = require('../config/config.' + process.env.NODE_ENV + '.json').authServerConfig.bypassId;

// get all faculties details
router.get('/config', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../config/authConfig.' + process.env.NODE_ENV + '.js'));
});
router.get('/bypassId', function (req, res, next) {
    res.send(bypassId);
});
module.exports = router;