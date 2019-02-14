(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMaintainCtrl', assetMaintainCtrl);
    assetMaintainCtrl.$inject = ['$scope', '$stateParams', 'assetMaintainService', 'assetMasterService'];/**/
    function assetMaintainCtrl($scope, $stateParams, assetMaintainService, assetMasterService) { /**/
        // alert("welcome to maintain");
        $scope.assetMaintain = {};
        $scope.assetMaintainValue = [];
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        $scope.dataMode = "ADD";
        // $stateParams = assetId;

        assetMasterService.getAssetById($stateParams.assetId, function (err, res) {
            if (!err) {
                $scope.assetMasterValue = res;
            }
        })
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#assetModal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateAsset = function () {
            assetMasterService.updateAsset($scope.newAsset._id, $scope.newAsset, function (err, res) {
                if (!err) {
                    var index = $scope.assetMasterValue.findIndex(function (data) {
                        return data._id == $scope.newAsset._id;
                    })
                    $scope.assetMasterValue[index] = $scope.newAsset;
                    $('#assetModal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        function loadInitial() {
            assetMaintainService.getAllAssetMaintain(function (err, res) {
                if (!err) {
                    $scope.assetMaintainValue = res;
                }
            })
        }
        loadInitial();
        $scope.saveAssetMaintain = function () {
            assetMaintainService.createAssetMaintain($scope.assetMaintain, function (err, res) {
                if (!err) {
                    $scope.assetMaintainValue.push($scope.assetMaintain);
                    alert("Submit Successfully");
                }
            })
        }
        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }
        $scope.deleteAssetMaintain = function () {
            assetMaintainService.deleteAssetMaintain($scope.assetMaintainValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.assetMaintainValue.splice($scope.deleteIndex, 1);
            })
        }
    }
})();