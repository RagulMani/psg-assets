(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('categoryCtrl', categoryCtrl);
    categoryCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function categoryCtrl($scope, assetMasterValueService, $timeout, $window) {
        $scope.newCategory = {};
        $scope.categoryValue = [];
        $scope.manufacturerDatas = [];
        $scope.dataMode = "ADD";

        function loadInitialCategories() {
            assetMasterValueService.getAllCategories(function (err, res) {
                if (!err) {
                    $scope.categoryValue = res;
                }
            })
        }
        loadInitialCategories();
        assetMasterValueService.getAllManufacturer(function (err, res) {
            if (!err) {
                $scope.manufacturerDatas = res;
            }
        })
        $scope.saveCategories = function () {
            assetMasterValueService.createCategories($scope.newCategory, function (err, res) {
                if (!err) {
                    $scope.categoryValue.push($scope.newCategory);
                    $('#categories-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentCategoryForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#categories-modal').modal("show");
            $scope.newCategory = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }

        $scope.updateCategory = function () {
            delete $scope.newCategory.$$hashKey
            assetMasterValueService.updateCategory($scope.newCategory._id, $scope.newCategory, function (err, res) {
                if (!err) {
                    var index = $scope.categoryValue.findIndex(function (data) {
                        return data._id == $scope.newCategory._id;
                    })
                    $scope.categoryValue[index] = $scope.newCategory;
                    $('#categories-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeCategories = function (index) {
            $scope.newCategory.splice(index, 1);
        }

        $scope.categoryDeleteModal = function (index) {
            $("#categoryDeleteModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteCategoriesSure = function () {
            assetMasterValueService.deleteCategories($scope.categoryValue[$scope.deleteIndex]._id, function (err, res) {
                $("#categoryDeleteModal").modal('hide');
                $scope.categoryValue.splice($scope.deleteIndex, 1);
            })
        }
    }
}
)();
