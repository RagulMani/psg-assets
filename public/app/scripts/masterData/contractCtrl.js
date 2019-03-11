(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('contractCtrl', contractCtrl);
    contractCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function contractCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newContract = {};
        $scope.contractValue = [];
        $scope.dataMode = "ADD";
        function loadInitialContract() {
            assetMasterValueService.getAllContract(function (err, res) {
                if (!err) {
                    $scope.contractValue = res;
                }
            })
        }
        loadInitialContract();
        $scope.saveContract = function () {
            assetMasterValueService.createContract($scope.newContract, function (err, res) {
                if (!err) {
                    $scope.contractValue.push($scope.newContract);
                    $('#add_contract').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForContractEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add_contract').modal("show");
            $scope.newContract = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateContract = function () {
            delete $scope.newContract.$$hashKey
            assetMasterValueService.updateContract($scope.newContract._id, $scope.newContract, function (err, res) {
                if (!err) {
                    var index = $scope.contractValue.findIndex(function (data) {
                        return data._id == $scope.newContract._id;
                    })
                    $scope.contractValue[index] = $scope.newContract;
                    $('#add_contract').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeContract = function (index) {
            $scope.newContract.splice(index, 1);
        }
        $scope.contractDeleteModal = function (index) {
            $("#contractDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteContractSure = function () {
            assetMasterValueService.deleteContract($scope.contractValue[$scope.deleteIndex]._id, function (err, res) {
                $("#contractDeleteModal").modal('hide');
                $scope.contractValue.splice($scope.deleteIndex, 1);
            })
        }
    }
})();