var express=require('express');
var router=express.Router();
var assetServices=require('../services/assetsService');
var appLogger=require('../logging/appLogger');
var authService = require('../services/authService');
var config = require('../config/config.' + process.env.NODE_ENV);

router.post('/createAsset',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.createAsset(req.body, function(err,details){
        if(!err){
           // appLogger.info("Oraganazation Details Displayed");
            console.log("Asset Created");
            res.send(details);
        }
        else{
            // appLogger.error({err:err},"Error while Creating Asset");
            console.log("Error Occured");
            res.status(500).send({error:err.name,message:err.message});
        }
    });
});

router.get('/getAllAsset',authService.verifyCallerWithKeycloak, function (req, res, next) {
    assetServices.getAllAsset(function (err, response) {
        if (!err) {
            // appLogger.info(" successfully updated");
            console.log("Please See the Console.");
            res.send(response);
        }
        else {
            // appLogger.error({ err: err }, "Error while updating Authority details");
            console.log("Error While read the item")
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

router.get('/readAssetById',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.readAssetById(req.body.id,function(err,response){
        if(!err){
            console.log("Choosen item Dispalys Here");
            res.send(response);
        }
        else{
            console.log("Error Occured while Add");
            res.status(500).send({ error: err.name, message: err.message });            
        }
    })
})

router.put('/updateAsset', authService.verifyCallerWithKeycloak, function (req, res, next) {
    assetServices.updateAsset(req.body.id,req.body.recordToEdit,function (err, response) {
        if (!err) {
            // appLogger.info("Details successfully updated");
            console.log("Update Successfully");
            res.send(response);
        }
        else {
            //appLogger.error({ err: err }, "Error while updating details");
            console.log("Error while update the file");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

router.delete('/deleteAsset/:id', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.deleteAsset(req.body,function (err, response) {
        if (!err) {
            // appLogger.info("Authority details successfully deleted");
            //console.log("Item removed Successfully");
            res.send(response);
        }
        else {
            // appLogger.error({ err: err }, "Error while deleting Authority details");
            console.log("Error while Deleting Item");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});


router.post('/createComponent', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.createComponent(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getAllComponent', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.getAllComponent(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallComponents")
        }
        else {
            res.status(500).send(err);
           // appLogger.error("error in getallComponents",err)
        }
    });
});
router.put('/updateComponent', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.updateComponent(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteComponent', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.deleteComponent(req.body.id, function (err, response) {
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

router.post('/createLicense', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.createLicense(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getAllLicense', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.getAllLicense(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallLicense")
        }
        else {
            res.status(500).send(err);
           // appLogger.error("error in getallLicense",err)
        }
    });
});
router.put('/updateLicense', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.updateLicense(req.body.id, req.body.recordToEdit, function (err, response) {
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
router.delete('/deleteLicense', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.deleteLicense(req.body.id, function (err, response) {
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

module.exports  = router;
