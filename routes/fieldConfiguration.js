const path = require('path');
var express = require('express');
var router = express.Router();
var fieldConfig = require('../config/config.' + process.env.NODE_ENV + '.json').fieldConfig;
var fieldSpec = fieldConfig;
router.get('/fieldConfig', function (req, res, next) {
  res.send(JSON.stringify(fieldSpec));
});

module.exports = router;