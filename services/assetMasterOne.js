var institutionDao = require('../daos/institutionDao');
var manufacturerDao = require('../daos/masterDataDao');
var modelDao = require('../daos/modelDao');
var categoriesDao = require('../daos/categoryDao');
var supplierDao =require('../daos/supplierDao');
var mongodb = require('../daos/MongodDbUtil');
var config = require('../config/config.' + process.env.NODE_ENV);
var entitiesRemoteUrl = config.entitiesRemoteUrl;
var moment = require('moment');

function createInstitution(recordToInsert, callback) {
    institutionDao.create(recordToInsert, callback);
}
function getAllInstitution(callback) {
    institutionDao.getAll(callback);
}
function updateInstitution(id, detailsToUpdate, callback) {
    institutionDao.update(id, detailsToUpdate, callback);
}
function deleteInstitution(id, callback) {
    institutionDao.remove(id.id, callback);
}

function createManufacturer(recordToInsert, callback) {
    manufacturerDao.create(recordToInsert, callback);
}
function getAllManufacturer(callback) {
    manufacturerDao.getAll(callback);
}
function updateManufacturer(id, detailsToUpdate, callback) {
    manufacturerDao.update(id, detailsToUpdate, callback);
}
function deleteManufacturer(id, callback) {
    manufacturerDao.remove(id.id, callback);
}

function createCategories(recordToInsert, callback) {
    categoriesDao.create(recordToInsert, callback);
}
function getAllCategories(callback) {
    categoriesDao.getAll(callback);
}
function updateCategories(id, detailsToUpdate, callback) {
    categoriesDao.update(id, detailsToUpdate, callback);
}
function deleteCategories(id, callback) {
    categoriesDao.remove(id.id, callback);
}

function createModel(recordToInsert, callback) {
    modelDao.create(recordToInsert, callback);
}
function getAllModel(callback) {
    modelDao.getAll(callback);
}
function updateModel(id, detailsToUpdate, callback) {
    modelDao.update(id, detailsToUpdate, callback);
}
function deleteModel(id, callback) {
    modelDao.remove(id.id, callback);
}

function createSupplier(recordToInsert, callback) {
    supplierDao.create(recordToInsert, callback);
}
function getAllSupplier(callback) {
    supplierDao.getAll(callback);
}
function updateSupplier(id, detailsToUpdate, callback) {
    supplierDao.update(id, detailsToUpdate, callback);
}
function deleteSupplier(id, callback) {
    supplierDao.remove(id.id, callback);
}

module.exports.createInstitution = createInstitution;
module.exports.getAllInstitution = getAllInstitution;
module.exports.updateInstitution = updateInstitution;
module.exports.deleteInstitution = deleteInstitution;

module.exports.createManufacturer = createManufacturer;
module.exports.getAllManufacturer = getAllManufacturer;
module.exports.updateManufacturer = updateManufacturer;
module.exports.deleteManufacturer = deleteManufacturer;

module.exports.createCategories = createCategories;
module.exports.getAllCategories = getAllCategories;
module.exports.updateCategories = updateCategories;
module.exports.deleteCategories = deleteCategories;

module.exports.createModel = createModel;
module.exports.getAllModel = getAllModel;
module.exports.updateModel = updateModel;
module.exports.deleteModel = deleteModel;

module.exports.createSupplier = createSupplier;
module.exports.getAllSupplier = getAllSupplier;
module.exports.updateSupplier = updateSupplier;
module.exports.deleteSupplier = deleteSupplier;