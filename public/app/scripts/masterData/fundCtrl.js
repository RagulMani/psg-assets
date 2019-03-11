(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('fundCtrl', fundCtrl);
    fundCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function fundCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newFund = {};
        $scope.fundValue = [];
        $scope.dataMode = "ADD";
        function loadInitialFund() {
            assetMasterValueService.getAllFund(function (err, res) {
                if (!err) {
                    $scope.fundValue = res;
                }
            })
        }
        loadInitialFund();
        $scope.saveFund = function () {
            assetMasterValueService.createFund($scope.newFund, function (err, res) {
                if (!err) {
                    $scope.fundValue.push($scope.newFund);
                    $('#add_fund').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForFundEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add_fund').modal("show");
            $scope.newFund = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateFund = function () {
            delete $scope.newFund.$$hashKey
            assetMasterValueService.updateFund($scope.newFund._id, $scope.newFund, function (err, res) {
                if (!err) {
                    var index = $scope.fundValue.findIndex(function (data) {
                        return data._id == $scope.newFund._id;
                    })
                    $scope.fundValue[index] = $scope.newFund;
                    $('#add_fund').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeFund = function (index) {
            $scope.newFund.splice(index, 1);
        }

        $scope.fundDeleteModal = function (index) {
            $("#fundDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteFundSure = function () {
            assetMasterValueService.deleteFund($scope.fundValue[$scope.deleteIndex]._id, function (err, res) {
                $("#fundDeleteModal").modal('hide');
                $scope.fundValue.splice($scope.deleteIndex, 1);
            })
        }
        }
    }
)();