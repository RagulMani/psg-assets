var express=require('express');
var router=express.Router();
var assetServices=require('../services/assetsService');
var appLogger=require('../logging/appLogger');
var authService = require('../services/authService');
var multer = require('multer');
var config = require('../config/config.' + process.env.NODE_ENV);
const storage = require('multer-gridfs-storage')({
    url: config.dbConfig.url
});
var gridfs = require('../daos/gridfsDao');
const upload = multer({ storage: storage });

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

router.post('/getAssetByQuery',authService.verifyCallerWithKeycloak, function (req, res, next) {
    assetServices.getAssetByQuery(req.body.asset,function (err, response) {
        if (!err) {
            // appLogger.info(" successfully updated");
            
            res.send(response);
        }
        else {
            // appLogger.error({ err: err }, "Error while updating Authority details");
            console.log("Error While read the item")
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});
router.get('/readAssetById/:id',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.readAssetById(req.params.id,function(err,response){
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

router.delete('/deleteAsset', authService.verifyCallerWithKeycloak, function (req, res) {
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

router.put('/file/upload', authService.verifyCallerWithKeycloak, upload.array("fileAttachment"), function (req, res, next) {
    if (!((req.files) && (req.files.length > 0))) {
        res.send({ message: "No files to upload" });
        return;
    }
    res.send(req.files);
});

router.get('/loadimg/:id/:originalname/:contentType/:contentType2', function (req, res, next) {
    var attachmentDetails = {
        id: req.params.id,
        originalname: req.params.originalname,
        contentType: req.params.contentType + "/" + req.params.contentType2
    }

    gridfs.openAttachment(attachmentDetails, res);
});

router.delete('/removeDirtyAttachment', function (req, res) {
    assetServices.removeDirtyAttachment(req.body.dirtyFileId, function (err, response) {
        if (!err) {
            res.send(response)
        }
        else {
            res.status(500).send(err);
        }
    })
})


router.post('/createAssetMaintain',authService.verifyCallerWithKeycloak, function(req,res,next){
    assetServices.createAssetMaintain(req.body, function(err,details){
        if(!err){
           // appLogger.info("Oraganazation Details Displayed");
            res.send(details);
        }
        else{
            // appLogger.error({err:err},"Error while Creating Asset");
            res.status(500).send({error:err.name,message:err.message});
        }
    });
});

router.get('/getAllAssetMaintain',authService.verifyCallerWithKeycloak, function (req, res, next) {
    assetServices.getAllAssetMaintain(function (err, response) {
        if (!err) {
            // appLogger.info(" successfully updated");
            res.send(response);
        }
        else {
            // appLogger.error({ err: err }, "Error while updating Authority details");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

router.put('/updateAssetMaintain', authService.verifyCallerWithKeycloak, function (req, res, next) {
    assetServices.updateAssetMaintain(req.body.id,req.body.recordToEdit,function (err, response) {
        if (!err) {
            // appLogger.info("Details successfully updated");
            res.send(response);
        }
        else {
            //appLogger.error({ err: err }, "Error while updating details");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

router.delete('/deleteAssetMaintain', authService.verifyCallerWithKeycloak, function (req, res) {
    assetServices.deleteAssetMaintain(req.body,function (err, response) {
        if (!err) {
            // appLogger.info("Authority details successfully deleted");
            res.send(response);
        }
        else {
            // appLogger.error({ err: err }, "Error while deleting Authority details");
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
    assetServices.deleteLicense(req.body, function (err, response) {
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
