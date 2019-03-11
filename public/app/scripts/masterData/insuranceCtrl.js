(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('insuranceCtrl', insuranceCtrl);
    insuranceCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function insuranceCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newInsurance = {};
        $scope.insuranceValue = [];
        $scope.dataMode = "ADD";

        function loadInitialInsurance() {
            assetMasterValueService.getAllInsurance(function (err, res) {
                if (!err) {
                    $scope.insuranceValue = res;
                }
            })
        }
        loadInitialInsurance();
        $scope.saveInsurance = function () {
            assetMasterValueService.createInsurance($scope.newInsurance, function (err, res) {
                if (!err) {
                    $scope.insuranceValue.push($scope.newInsurance);
                    $('#insurance-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForInsuranceEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#insurance-modal').modal("show");
            $scope.newInsurance = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateInsurance = function () {
            delete $scope.newInsurance.$$hashKey
            assetMasterValueService.updateInsurance($scope.newInsurance._id, $scope.newInsurance, function (err, res) {
                if (!err) {
                    var index = $scope.insuranceValue.findIndex(function (data) {
                        return data._id == $scope.newInsurance._id;
                    })
                    $scope.insuranceValue[index] = $scope.newInsurance;
                    $('#institution-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeInsurance = function (index) {
            $scope.newInsurance.splice(index, 1);
        }

        $scope.insuranceDeleteModal = function (index) {
            $("#insuranceDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteInsuranceSure = function () {
            assetMasterValueService.deleteInsurance($scope.insuranceValue[$scope.deleteIndex]._id, function (err, res) {
                $("#insuranceDeleteModal").modal('hide');
                $scope.insuranceValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();