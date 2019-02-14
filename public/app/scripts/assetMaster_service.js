(function () {
    'use strict';
    var App = angular.module('app');

    App.service('assetMasterValueService', assetMasterValueService);
    assetMasterValueService.$inject = ["$http", "$rootScope"];
    function assetMasterValueService($http, $rootScope) {

        
        this.getAllInstitution = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllInstitution'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createInstitution = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createInstitution'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateInstitution = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateInstitution'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteInstitution = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteInstitution'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllCategories = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllCategories'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createCategories = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createCategories'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateCategories = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateCategories'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteCategories = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteCategories'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllManufacturer = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllManufacturer'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createManufacturer = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createManufacturer'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateManufacturer = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateManufacturer'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteManufacturer = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteManufacturer'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllModel = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllModel'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createModel= function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createModel'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateModel = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateModel'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteModel = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteModel'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllSupplier = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllSupplier'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createSupplier = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createSupplier'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateSupplier = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateSupplier'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteSupplier = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteSupplier'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
    }
})();