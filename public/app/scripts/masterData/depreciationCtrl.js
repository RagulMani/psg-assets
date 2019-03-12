(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('depreciationCtrl', depreciationCtrl);
    depreciationCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function depreciationCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newDepreciation = {};
        $scope.depreciationValue = [];
        $scope.dataMode = "ADD";

        function loadInitialDepreciation() {
            assetMasterValueService.getAllDepreciation(function (err, res) {
                if (!err) {
                    $scope.depreciationValue = res;
                }
            })
        } loadInitialDepreciation();
        $scope.saveDepreciation = function () {
            assetMasterValueService.createDepreciation($scope.newDepreciation, function (err, res) {
                if (!err) {
                    $scope.depreciationValue.push($scope.newDepreciation);
                    $('#add-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })

        }
        $scope.setEnvironmentForDepreciationEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add-modal').modal("show");
            $scope.newDepreciation = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateDepreciation = function () {
            delete $scope.newDepreciation.$$hashKey
            assetMasterValueService.updateDepreciation($scope.newDepreciation._id, $scope.newDepreciation, function (err, res) {
                if (!err) {
                    var index = $scope.depreciationValue.findIndex(function (data) {
                        return data._id == $scope.newDepreciation._id;
                    })
                    $scope.depreciationValue[index] = $scope.newDepreciation;
                    $('#add-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeDepreciation = function (index) {
            $scope.newDepreciation.splice(index, 1);
        }

        $scope.depreciationDeleteModal = function (index) {
            $("#depreciationDeleteModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteDepreciationSure = function () {
            assetMasterValueService.deleteDepreciation($scope.depreciationValue[$scope.deleteIndex]._id, function (err, res) {
                $("#depreciationDeleteModal").modal('hide');
                $scope.depreciationValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();