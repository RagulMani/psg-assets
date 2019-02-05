(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMasterViewCtrl', assetMasterViewCtrl);
    assetMasterViewCtrl.$inject = ['$scope', '$stateParams', 'assetMasterService'];
    function assetMasterViewCtrl($scope, $stateParams, assetMasterService) {
        alert("Welcome to asset View");
       // alert($stateParams);
        $scope.assetId = $stateParams.asset;
        alert($stateParams.asset);
        // console.log($stateParams);
        $scope.viewData = {};
        $scope.ViewDataValue = [];
        $scope.dataMode = "ADD";
        assetMasterService.getAssetById($scope.assetId,function (err, res) {
            if (!err) {
                $scope.viewData = res;
            }
        })
        
    }
})();