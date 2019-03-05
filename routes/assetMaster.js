var express = require('express');
var router = express.Router();
var assetMasterOne = require('../services/assetMasterOne');
var appLogger = require('../logging/appLogger');
var authService = require('../services/authService');
var multer = require('multer');
var config = require('../config/config.' + process.env.NODE_ENV);
const storage = require('multer-gridfs-storage')({
    url: config.dbConfig.url
});
const upload = multer({ storage: storage });

router.post('/createInstitution', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createInstitution(req.body, function (err, response) {
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
router.get('/getAllInstitution', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllInstitution(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllInstitution")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllInstitution",err)
        }
    });
});
router.put('/updateInstitution', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateInstitution(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteInstitution', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteInstitution(req.body, function (err, response) {
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

router.post('/createManufacturer', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createManufacturer(req.body, function (err, response) {
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
router.get('/getAllManufacturer', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllManufacturer(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.put('/updateManufacturer', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateManufacturer(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteManufacturer', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteManufacturer(req.body, function (err, response) {
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

router.post('/createCategories', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createCategories(req.body, function (err, response) {
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
router.get('/getAllCategories', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllCategories(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.put('/updateCategory', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateCategory(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteCategories', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteCategories(req.body, function (err, response) {
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

router.post('/createModel', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createModel(req.body, function (err, response) {
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
router.get('/getAllModel', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllModel(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.put('/updateModel', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateModel(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteModel', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteModel(req.body, function (err, response) {
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

router.post('/createSupplier', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createSupplier(req.body, function (err, response) {
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
router.get('/getAllSupplier', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllSupplier(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.put('/updateSupplier', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateSupplier(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteSupplier', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteSupplier(req.body, function (err, response) {
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

router.post('/createInsurance', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createInsurance(req.body, function (err, response) {
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
router.get('/getAllInsurance', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllInsurance(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.get('/readInsuranceById/:id',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.readinsuracneById(req.params.id,function(err,response){
        if(!err){
            res.send(response);
        }
        else{
            console.log("Error Occured while Add");
            res.status(500).send({ error: err.name, message: err.message });            
        }
    })
})
router.put('/updateInsurance', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateInsurance(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteInsurance', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteInsurance(req.body, function (err, response) {
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

router.post('/createFund', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createFund(req.body, function (err, response) {
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
router.get('/getAllFund', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllFund(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.get('/readFundById/:id',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.readFundById(req.params.id,function(err,response){
        if(!err){
            res.send(response);
        }
        else{
            console.log("Error Occured while Add");
            res.status(500).send({ error: err.name, message: err.message });            
        }
    })
})
router.put('/updateFund', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateFund(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteFund', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteFund(req.body, function (err, response) {
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



router.post('/createContract', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.createContract(req.body, function (err, response) {
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
router.get('/getAllContract', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.getAllContract(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getAllManufacturer")
        }
        else {
            res.status(500).send(err);
            // appLogger.error("error in getAllManufacturer",err)
        }
    });
});
router.get('/readContractById/:id',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.readContractById(req.params.id,function(err,response){
        if(!err){
            res.send(response);
        }
        else{
            console.log("Error Occured while Add");
            res.status(500).send({ error: err.name, message: err.message });            
        }
    })
})
router.put('/updateContract', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.updateContract(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteContract', authService.verifyCallerWithKeycloak, function (req, res) {
    assetMasterOne.deleteContract(req.body, function (err, response) {
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