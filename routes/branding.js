const path = require('path');
var express = require('express');
var router = express.Router();
var appLogger = require('../logging/appLogger');
var config = require('../config/config.' + process.env.NODE_ENV);
var brandingConfig = config.brandingConfig;

// logo
router.get('/logo', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/assets/img/' + brandingConfig.logoImageFileName));
});
module.exports = router;