(function () {
    'use strict';
    var App = angular.module('app');

    App.service('assetMasterService', assetMasterService);
    assetMasterService.$inject = ["$http", "$rootScope"];
    function assetMasterService($http, $rootScope) {

        this.getAllAsset = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAllAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAssetById = function (id, callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readAssetById/' + id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAssetByQuery = function (query, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: { asset: query },
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAssetByQuery'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.getSelectedNodes = function (filterQuery, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: filterQuery,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getSelectedNodes'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createAsset = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/createAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateAsset = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/updateAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteAsset = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/deleteAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.removeDirtyAttachment = function (id, callback) {
            var responseData = $http({
                method: 'DELETE',
                data: { "dirtyFileId": id },
                timeout: 2 * 60 * 1000,
                headers: { 'Content-type': 'application/json' },
                url: "asset/removeDirtyAttachment"
            });
            responseData.then(function (response) {
                callback(null, response.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllMasterData = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.createMasterData = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateMasterData = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteMasterData = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllLicense = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAllLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.createLicense = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/createLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updatelicense = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/updateLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteLicense = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/deleteLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

    }
})();