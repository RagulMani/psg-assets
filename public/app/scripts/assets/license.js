(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('licenseCtrl', licenseCtrl);
    licenseCtrl.$inject = ['$scope', 'assetMasterService'];
    function licenseCtrl($scope, assetMasterService) {
        // alert("Welcome to License");
        $scope.newLicense = {};
        $scope.licenseMasters = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllLicense(function (err, res) {
                if (!err) {
                    $scope.mastersData = res;

                }

            })
        }
        loadInitial()
        $scope.saveLicense = function () {
            // $("#license-modal").modal('hide');
            assetMasterService.createLicense($scope.newLicense, function (err, res) {
                if (!err) {
                    $scope.licenseMasters.push($scope.newLicense);
                    // $('#license-modal').modal("hide");
                    alert("Data inserted successfully");

                }
            })
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#license-modal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
            //alert("item Deleted Successfully");

        }
        $scope.updateLicense = function () {
            delete $scope.newLicense.$$hashKey
            assetMasterService.updateLicense($scope.newLicense._id, $scope.newAsset, function (err, res) {
                if (!err) {
                    var index = $scope.assetMasters.findIndex(function (data) {
                        return data._id == $scope.newLicense._id;
                    });
                    $scope.licenseMasters[index] = $scope.newLicense;
                    //  $('#license-modal').modal('hide');
                }
            });
        }
        $scope.removeLicense = function (index) {
            $scope.newLicense.splice(index, 1);
        }

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;

        }
        $scope.deleteLicenseSure = function () {
            assetMasterService.deleteLicense($scope.deleteIndex, function (err, res) {
            })

            $scope.licenseMasters.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');

        }
    }

})();