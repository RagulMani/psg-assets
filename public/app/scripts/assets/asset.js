(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetCtrl', assetCtrl);
    assetCtrl.$inject = ['$scope', 'assetMasterService'];
    function assetCtrl($scope, assetMasterService) {
        $scope.newAsset = {};
        $scope.asset = [];
        assetMasterService.getAllMasterData(function (err, res) {
            if (!err) {
                $scope.mastersData = res;
            }
        })

        $scope.saveAsset = function () {
            assetMasterService.createAsset($scope.newAsset, function (err, res) {
                if (!err) {
                    $scope.asset.push($scope.newAsset);
                    alert("Submit Successfully");

                }
            })
        }
    }
})();