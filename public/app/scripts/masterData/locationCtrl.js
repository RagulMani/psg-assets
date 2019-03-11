(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('locationCtrl', locationCtrl);
    locationCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function locationCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newLocation = {};
        $scope.locationValue = [];
        $scope.dataMode = "ADD";

        function loadInitialLocation() {
            assetMasterValueService.getAllLocation(function (err, res) {
                if (!err) {
                    $scope.locationValue = res;
                }
            })
        }
        loadInitialLocation();
        $scope.saveLocation = function () {
            assetMasterValueService.createLocation($scope.newLocation, function (err, res) {
                if (!err) {
                    $scope.locationValue.push($scope.newLocation);
                    $('#location-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForLocationEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#location-modal').modal("show");
            $scope.newLocation = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateLocation = function () {
            delete $scope.newLocation.$$hashKey
            assetMasterValueService.updateLocation($scope.newLocation._id, $scope.newLocation, function (err, res) {
                if (!err) {
                    var index = $scope.locationValue.findIndex(function (data) {
                        return data._id == $scope.newLocation._id;
                    })
                    $scope.locationValue[index] = $scope.newLocation;
                    $('#location-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeLocation = function (index) {
            $scope.newLocation.splice(index, 1);
        }

        $scope.locationDeleteModal = function (index) {
            $("#locationDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteLocationSure = function () {
            assetMasterValueService.deleteLocation($scope.locationValue[$scope.deleteIndex]._id, function (err, res) {
                $("#locationDeleteModal").modal('hide');
                $scope.locationValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();