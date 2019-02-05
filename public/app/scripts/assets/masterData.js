(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('masterDataCtrl', masterDataCtrl);
    masterDataCtrl.$inject = ['$scope', 'assetMasterService'];
    function masterDataCtrl($scope, assetMasterService) {
        //alert("Welcome to Master");

        $scope.masterData = {};
        $scope.masterDataValue = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllMasterData(function (err, res) {
                if (!err) {
                    $scope.masterDataValue = res;
                }
            })
        }
        loadInitial();
        /*function showUnique() {
            groupsServices.getDistinctValues("type", {}, function (err, res) {
                if (!err) {
                    $scope.availbleTypes = res;
                }
            })*/
        $scope.saveMasterData = function () {
            // if ($scope.masterData.key) {
            //    $scope.typeExistError = "";
            // $("#basic-modal").modal('hide');
            // $scope.masterDataValue.forEach(function (item, index) {
            //     $scope.masterDataValue[index] = item.toUpperCase();
            // })
            assetMasterService.createMasterData($scope.masterData, function (err, res) {
                if (!err) {
                    $scope.masterDataValue.push($scope.masterData);
                    alert("Item inserted Successfully");
                }

            })
        }
        $scope.setMasterDataForEdit = function (masterData) {
            $scope.masterData = JSON.parse(JSON.stringify(masterData));
            $scope.dataMode = "EDIT";
            $("#basic-modal").modal({ backdrop: 'static', keyboard: false });
        }
        $scope.saveEditedMasterData = function () {
            assetMasterService.updateMasterData($scope.masterData._id, $scope.masterData, function (err, res) {
                $scope.masterData.forEach(function (masterdata, index) {
                    if (masterdata._id == $scope.masterData._id) {
                        $scope.masterData[index] = $scope.masterData;
                    }
                })
            })
            $("#basic-modal").modal('hide');
        }
        $scope.removeMasterData = function (index) {
            $scope.masterDataValue.splice(index, 1);
        }
        $scope.askDeleteModal = function (index) {
            $("#askDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }
        $scope.deleteMasterDataSure = function (masterData) {
            assetMasterService.deleteMasterData($scope.deleteIndex, function (err, res) {
                console.log("success")
            })
            $scope.masterDataValue.splice($scope.deleteIndex, 1);
            $("#askDeleteModal").modal('hide');
        }
    }
})();