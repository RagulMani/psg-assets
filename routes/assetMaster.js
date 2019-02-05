var express = require('express');
var router = express.Router();
var assetMasterOne = require('../services/assetMasterOne');
var appLogger = require('../logging/appLogger');
var authService = require('../services/authService');
var config = require('../config/config.' + process.env.NODE_ENV);

router.post('/createMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createMasterData(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});``
router.get('/getAllMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllMasterData(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllMasterData")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllMasterData",err)
        }
    });
});
router.put('/updateMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateMasterData(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.delete('/deleteMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteMasterData(req.body.id, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in deleting");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in deleting ", err);
        }
    });
});


module.exports = router;