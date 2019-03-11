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
        this.updateCategory = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateCategory'
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
        this.getAllDepreciation = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllDepreciation'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createDepreciation = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createDepreciation'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateDepreciation = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateDepreciation'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteDepreciation = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteDepreciation'
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
        this.getAllInsurance = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllInsurance'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.getInsuranceById = function (id, callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readInsuranceById/' + id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createInsurance = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createInsurance'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateInsurance = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateInsurance'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteInsurance = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteInsurance'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllFund = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllFund'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getFundById = function (id, callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readFundById/' + id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createFund = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createFund'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateFund = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateFund'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteFund = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteFund'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.getAllContract = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllContract'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getContractById = function (id, callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readContractById/' + id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createContract = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createContract'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateContract = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateContract'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteContract = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteContract'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.getAllLocation = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllLocation '
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getLocationById = function (id, callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readLocationById/' + id
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createLocation = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createLocation '
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateLocation = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateLocation '
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteLocation = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteLocation'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

    }
})();