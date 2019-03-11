(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('supplierCtrl', supplierCtrl);
    supplierCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function supplierCtrl($scope, assetMasterValueService, $timeout, $window) {
        alert("jkhgfdghj");
        $scope.newSupplier = {};
        $scope.supplierValue = [];
        $scope.dataMode = "ADD";

        function loadInitialSupplier() {
            assetMasterValueService.getAllSupplier(function (err, res) {
                if (!err) {
                    $scope.supplierValue = res;
                }
            })
        } loadInitialSupplier();
        $scope.saveSupplier = function () {
            assetMasterValueService.createSupplier($scope.newSupplier, function (err, res) {
                if (!err) {
                    $scope.supplierValue.push($scope.newSupplier);
                    $('#supplier-moda   l').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForSupplierEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#supplier-modal').modal("show");
            $scope.newSupplier = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateSupplier = function () {
            delete $scope.newSupplier.$$hashKey
            assetMasterValueService.updateSupplier($scope.newSupplier._id, $scope.newSupplier, function (err, res) {
                if (!err) {
                    var index = $scope.supplierValue.findIndex(function (data) {
                        return data._id == $scope.newSupplier._id;
                    })
                    $scope.supplierValue[index] = $scope.newSupplier;
                    $('#supplier-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeSupplier = function (index) {
            $scope.newSupplier.splice(index, 1);
        }

        $scope.supplierDeleteModal = function (index) {
            $("#supplierDeleteModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteSupplierSure = function () {
            assetMasterValueService.deleteSupplier($scope.supplierValue[$scope.deleteIndex]._id, function (err, res) {
                $("#supplierDeleteModal").modal('hide');
                $scope.supplierValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();
