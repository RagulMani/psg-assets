(function () {
    'use strict';
    var App = angular.module('app');
    App.service('assetMaintainService', assetMaintainService);
    assetMaintainService.$inject = ["$http", "$rootScope"];
    function assetMaintainService($http, $rootScope) {

        this.getAllAssetMaintain = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAllAssetMaintain'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createAssetMaintain = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/createAssetMaintain'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateAssetMaintain = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/updateAssetMaintain'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteAssetMaintain = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/deleteAssetMaintain'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        
    }
})();