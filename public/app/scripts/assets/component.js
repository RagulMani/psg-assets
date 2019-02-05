(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('componentCtrl', componentCtrl);
    componentCtrl.$inject = ['$scope', 'assetMasterService'];
    function componentCtrl($scope, assetMasterService) {
        $scope.newComponent = {};
        $scope.newComponent.features = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllComponent(function (err, res) {
                if (!err) {
                    $scope.mastersData = res;

                }

            })
        }
        loadInitial()
        $scope.saveNewComponent = function () {
            $("#basic-modal").modal('hide');
            $scope.masterData.values.forEach(function (item, index) {
                $scope.masterData.values[index] = item.toUpperCase();
            })
            assetMasterService.createComponent($scope.masterData, function (err, res) {
                if (!err) {
                    $scope.mastersData.push(res);
                }

            })
        }

    }
});