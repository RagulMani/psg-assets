var masterDataDao = require('../daos/masterDataDao');
var mongodb = require('../daos/MongodDbUtil');
var config = require('../config/config.' + process.env.NODE_ENV);
var entitiesRemoteUrl = config.entitiesRemoteUrl;
var moment = require('moment');


function createMasterData(recordToInsert, callback) {
    masterDataDao.create(recordToInsert, callback);
}
function getAllMasterData(callback) {
    masterDataDao.getAll(callback);
}
function updateMasterData(id, detailsToUpdate, callback) {
    masterDataDao.update(id, detailsToUpdate, callback);
}
function deleteMasterData(id, callback) {
    masterDataDao.remove(id, callback);
}

module.exports.createMasterData = createMasterData;
module.exports.getAllMasterData = getAllMasterData;
module.exports.updateMasterData = updateMasterData;
module.exports.deleteMasterData = deleteMasterData;