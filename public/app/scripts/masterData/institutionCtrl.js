(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('institutionCtrl', institutionCtrl);
    institutionCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function institutionCtrl($scope, assetMasterValueService, $timeout, $window) {
        //alert("welcome");
        $scope.newInstitution = {};
        $scope.institutionValue = [];
        $scope.dataMode = "ADD";

        function loadInitialInstitution() {
            assetMasterValueService.getAllInstitution(function (err, res) {
                if (!err) {
                    $scope.institutionValue = res;
                }
            })
        }
        loadInitialInstitution();
        $scope.saveInstitution = function () {
            assetMasterValueService.createInstitution($scope.newInstitution, function (err, res) {
                if (!err) {
                    $scope.institutionValue.push($scope.newInstitution);
                    $('#institution-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForInstEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#institution-modal').modal("show");
            $scope.newInstitution = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateInstitution = function () {
            delete $scope.newInstitution.$$hashKey
            assetMasterValueService.updateInstitution($scope.newInstitution._id, $scope.newInstitution, function (err, res) {
                if (!err) {
                    var index = $scope.institutionValue.findIndex(function (data) {
                        return data._id == $scope.newInstitution._id;
                    })
                    $scope.institutionValue[index] = $scope.newInstitution;
                    $('#institution-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeInstitution = function (index) {
            $scope.newInstitution.splice(index, 1);
        }

        $scope.instDeleteModal = function (index) {
            $("#instDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteInstitutionSure = function () {
            assetMasterValueService.deleteInstitution($scope.institutionValue[$scope.deleteIndex]._id, function (err, res) {
                $("#instDeleteModal").modal('hide');
                $scope.institutionValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();
