var institutionDao = require('../daos/institutionDao');
var manufacturerDao = require('../daos/masterDataDao');
var depreciationDao = require('../daos/DepreciationDao');
var categoriesDao = require('../daos/categoryDao');
var supplierDao = require('../daos/supplierDao');
var insuranceDao = require('../daos/insuranceDao');
var fundDao = require('../daos/fundDao');
var contractDao = require('../daos/contractDao');
var locationDao=require('../daos/locationDao');
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
    institutionDao.updateById(id, detailsToUpdate, callback);
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
    manufacturerDao.updateById(id, detailsToUpdate, callback);
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
function updateCategory(id, detailsToUpdate, callback) {
    categoriesDao.updateById(id, detailsToUpdate, callback);
}
function deleteCategories(id, callback) {
    categoriesDao.remove(id.id, callback);
}

function createDepreciation(recordToInsert, callback) {
    depreciationDao.create(recordToInsert, callback);
}
function getAllDepreciation(callback) {
    depreciationDao.getAll(callback);
}
function updateDepreciation(id, detailsToUpdate, callback) {
    depreciationDao.updateById(id, detailsToUpdate, callback);
}
function deleteDepreciation(id, callback) {
    depreciationDao.remove(id.id, callback);
}

function createSupplier(recordToInsert, callback) {
    supplierDao.create(recordToInsert, callback);
}
function getAllSupplier(callback) {
    supplierDao.getAll(callback);
}
function updateSupplier(id, detailsToUpdate, callback) {
    supplierDao.updateById(id, detailsToUpdate, callback);
}
function deleteSupplier(id, callback) {
    supplierDao.remove(id.id, callback);
}

function createInsurance(recordToInsert, callback) {
    insuranceDao.create(recordToInsert, callback);
}
function getAllInsurance(callback) {
    insuranceDao.getAll(callback);
}
function readInsuranceById(id, callback) {
    assetDao.getById(id, callback);
}
function updateInsurance(id, detailsToUpdate, callback) {
    insuranceDao.updateById(id, detailsToUpdate, callback);
}
function deleteInsurance(id, callback) {
    insuranceDao.remove(id.id, callback);
}

function createFund(recordToInsert, callback) {
    fundDao.create(recordToInsert, callback);
}
function getAllFund(callback) {
    fundDao.getAll(callback);
}
function readFundById(id, callback) {
    assetDao.getById(id, callback);
}
function updateFund(id, detailsToUpdate, callback) {
    fundDao.updateById(id, detailsToUpdate, callback);
}
function deleteFund(id, callback) {
    fundDao.remove(id.id, callback);
}
function createContract(recordToInsert, callback) {
    contractDao.create(recordToInsert, callback);
}
function getAllContract(callback) {
    contractDao.getAll(callback);
}
function readContractById(id, callback) {
    assetDao.getById(id, callback);
}
function updateContract(id, detailsToUpdate, callback) {
    contractDao.updateById(id, detailsToUpdate, callback);
}
function deleteContract(id, callback) {
    contractDao.remove(id.id, callback);
}

function createLocation(recordToInsert, callback) {
    locationDao.create(recordToInsert, callback);
}
function getAllLocation(callback) {
    locationDao.getAll(callback);
}
function readLocationById(id, callback) {
    locationDao.getById(id, callback);
}
function updateLocation(id, detailsToUpdate, callback) {
    locationDao.updateById(id, detailsToUpdate, callback);
}
function deleteLocation(id, callback) {
    locationDao.remove(id.id, callback);
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
module.exports.updateCategory = updateCategory;
module.exports.deleteCategories = deleteCategories;

module.exports.createDepreciation = createDepreciation;
module.exports.getAllDepreciation = getAllDepreciation;
module.exports.updateDepreciation = updateDepreciation;
module.exports.deleteDepreciation = deleteDepreciation;

module.exports.createSupplier = createSupplier;
module.exports.getAllSupplier = getAllSupplier;
module.exports.updateSupplier = updateSupplier;
module.exports.deleteSupplier = deleteSupplier;

module.exports.createInsurance = createInsurance;
module.exports.getAllInsurance = getAllInsurance;
module.exports.updateInsurance = updateInsurance;
module.exports.deleteInsurance = deleteInsurance;
module.exports.readInsuranceById = readInsuranceById;

module.exports.createFund = createFund;
module.exports.getAllFund = getAllFund;
module.exports.updateFund = updateFund;
module.exports.deleteFund = deleteFund;
module.exports.readFundById = readFundById;

module.exports.createContract = createContract;
module.exports.getAllContract = getAllContract;
module.exports.updateContract = updateContract;
module.exports.deleteContract = deleteContract;
module.exports.readContractById = readContractById;

module.exports.createLocation = createLocation;
module.exports.getAllLocation = getAllLocation;
module.exports.updateLocation = updateLocation;;
module.exports.readLocationById = readLocationById;
module.exports.deleteLocation = deleteLocation;
