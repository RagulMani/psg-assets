var assetDao = require('../daos/assetsDao');
var assetMaintainDao = require('../daos/assetMaintainDao');
var componentDao = require('../daos/componentDao');
var licenseDao = require('../daos/licenseDao');
// var gridfsDao = require('../daos/gridfsDao');
var mongodb = require('../daos/MongodDbUtil');
var config = require('../config/config.' + process.env.NODE_ENV);
var entitiesRemoteUrl = config.entitiesRemoteUrl;
var moment = require('moment');


function createAsset(recordToInsert, callback) {
    assetDao.create(recordToInsert, callback);
}
function getAllAsset(callback) {
    assetDao.getAll(callback);
}
function readAssetById(id, callback) {
    assetDao.getById(id, callback);
}
function getAssetByQuery(query,callback){
    assetDao.getByQuery(query,callback);
}
function updateAsset(id, detailsToUpdate, callback) {
    assetDao.updateById(id, detailsToUpdate, callback);
}
function deleteAsset(id, callback) {
    assetDao.remove(id.id, callback);
}
function removeDirtyAttachment(fileId, callback) {
    gridfsDao.dropAttachment(fileId, callback);
}

function createAssetMaintain(recordToInsert, callback) {
    assetMaintainDao.create(recordToInsert, callback);
}
function getAllAssetMaintain(callback) {
    assetMaintainDao.getAll(callback);
}
function updateAssetMaintain(id, detailsToUpdate, callback) {
    assetMaintainDao.updateById(id, detailsToUpdate, callback);
}
function deleteAssetMaintain(id, callback) {
    assetMaintainDao.remove(id.id, callback);
}


function createComponent(recordToInsert, callback) {
    componentDao.create(recordToInsert, callback);
}
function getAllComponent(callback) {
    componentDao.getAll(callback);
}
function updateComponent(id, detailsToUpdate, callback) {
    componentDao.update(id, detailsToUpdate, callback);
}
function deleteComponent(id, callback) {
    componentDao.remove(id, callback);
}

function createLicense(recordToInsert, callback) {
    licenseDao.create(recordToInsert, callback);
}
function getAllLicense(callback) {
    licenseDao.getAll(callback);
}
function updateLicense(id, detailsToUpdate, callback) {
    licenseDao.update(id, detailsToUpdate, callback);
}
function deleteLicense(id, callback) {
    licenseDao.remove(id.id, callback);
}

module.exports.updateAsset = updateAsset;
module.exports.getAllAsset = getAllAsset;
module.exports.getAssetByQuery=getAssetByQuery;
module.exports.readAssetById = readAssetById;
module.exports.createAsset = createAsset;
module.exports.deleteAsset = deleteAsset;
module.exports.removeDirtyAttachment = removeDirtyAttachment;



module.exports.updateComponent = updateComponent;
module.exports.getAllComponent = getAllComponent;
module.exports.createComponent = createComponent;
module.exports.deleteComponent = deleteComponent;

module.exports.updateLicense = updateLicense;
module.exports.getAllLicense = getAllLicense;
module.exports.createLicense = createLicense;
module.exports.deleteLicense = deleteLicense;

module.exports.createAssetMaintain = createAssetMaintain;
module.exports.getAllAssetMaintain = getAllAssetMaintain;
module.exports.updateAssetMaintain = updateAssetMaintain;
module.exports.deleteAssetMaintain = deleteAssetMaintain;
