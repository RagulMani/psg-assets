(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMasterCtrl', assetMasterCtrl);
    assetMasterCtrl.$inject = ['$scope', 'assetMasterService'];/*'$stateparams',*/
    function assetMasterCtrl($scope, assetMasterService) { /*$stateparams,*/
        //alert("welcome");
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        //$scope.assetStatus=$assetParams.asset;
        //$scope.status=["Pending","Ready to deploy", "Deployed", "Archived", "Broken", "Lost/Stolen", "Out for maintenance", "Scraped"]
        $scope.dataMode = "ADD";
        // $scope.goToAsset = function (id) {
        //     $state.go('editAsset', { id: id });
        // }

        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
                }
            })
        }
        // assetMasterService.getAllMasterData(function (err, res) {
        //     if (!err) {
        //         $scope.assetMasterValue = res;
        //     }
        // })
        // assetMasterService.readAssetById(function (err, res) {
        //     if (!err) {
        //         $scope.masterData = res;
        //     }
        // })



        loadInitial();
        $scope.saveAsset = function () {
            // $("#assetModal").modal('hide');
            assetMasterService.createAsset($scope.newAsset, function (err, res) {
                if (!err) {
                    $scope.assetMasterValue.push($scope.newAsset);
                    // $('#assetModal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#assetModal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
            //alert("item Deleted Successfully");

        }
        $scope.updateAsset = function () {
            delete $scope.newAsset.$$hashKey
            assetMasterService.updateAsset($scope.newAsset._id, $scope.newAsset, function (err, res) {
                if (!err) {
                    var index = $scope.assetMasterValue.findIndex(function (data) {
                        return data._id == $scope.newAsset._id;
                    });
                    $scope.assetMasterValue[index] = $scope.newAsset;
                    //$('#assetModal').modal('hide');
                }
            });
        }
        $scope.removeAsset = function (index) {
            $scope.newAsset.splice(index, 1);
        }

        $scope.confirmModal = function (index) {

            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;

        }

        $scope.deleteAssetSure = function () {
            assetMasterService.deleteAsset($scope.deleteIndex, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.assetMasterValue.splice($scope.deleteIndex, 4);
            })
        }
    }

})();