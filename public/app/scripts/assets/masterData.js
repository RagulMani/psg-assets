(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('masterDataCtrl', masterDataCtrl);
    masterDataCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function masterDataCtrl($scope, assetMasterValueService, $timeout, $window) {
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
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#institution-modal').modal("show");
            $scope.newInstitution = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

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

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteInstitutionSure = function () {
            assetMasterValueService.deleteInstitution($scope.institutionValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.institutionValue.splice($scope.deleteIndex, 1);
            })
        }


        $scope.newCategory = {};
        $scope.categoryValue = [];
        $scope.dataMode = "ADD";

        function loadInitialCategories() {
            assetMasterValueService.getAllCategories(function (err, res) {
                if (!err) {
                    $scope.categoryValue = res;
                }
            })
        }
        loadInitialCategories();
        $scope.saveCategories = function () {
            assetMasterValueService.createCategories($scope.newCategory, function (err, res) {
                if (!err) {
                    $scope.categoryValue.push($scope.newCategory);
                    $('#categories-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#categories-modal').modal("show");
            $scope.newCategory = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateCategories = function () {
            delete $scope.newCategory.$$hashKey
            assetMasterValueService.updateCategories($scope.newCategory._id, $scope.newCategory, function (err, res) {
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

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteCategoriesSure = function () {
            assetMasterValueService.deleteCategories($scope.categoryValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.categoryValue.splice($scope.deleteIndex, 1);
            })
        }

        $scope.newManufacturer = {};
        $scope.manufacturerValue = [];
        $scope.dataMode = "ADD";

        function loadInitialManufacturer() {
            assetMasterValueService.getAllManufacturer(function (err, res) {
                if (!err) {
                    $scope.manufacturerValue = res;
                }
            })
        } 
        loadInitialManufacturer();
        $scope.saveManufacturer = function () {
            assetMasterValueService.createManufacturer($scope.newManufacturer, function (err, res) {
                if (!err) {
                    // console.log($scope.newManufacturer);
                    $scope.manufacturerValue.push($scope.newManufacturer);
                    //console.log($scope.manufacturerValue);
                    $('#manufacturer-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
            
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#manufacturer-modal').modal("show");
            $scope.newManufacturer = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateManufacturer = function () {
            delete $scope.newManufacturer.$$hashKey
            assetMasterValueService.updateManufacturert($scope.newManufacturer._id, $scope.newManufacturer, function (err, res) {
                if (!err) {
                    var index = $scope.manufacturerValue.findIndex(function (data) {
                        return data._id == $scope.newManufacturer._id;
                    })
                    $scope.manufacturerValue[index] = $scope.newManufacturer;
                    $('#manufacturer-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeManufacturer = function (index) {
            $scope.newManufacturer.splice(index, 1);
        }

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteManufacturerSure = function () {
            assetMasterValueService.deleteManufacturer($scope.manufacturerValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.manufacturerValue.splice($scope.deleteIndex, 1);
            })
        }


        $scope.newModel = {};
        $scope.modelValue = [];
        $scope.dataMode = "ADD";

        function loadInitialModel() {
            assetMasterValueService.getAllModel(function (err, res) {
                if (!err) {
                    $scope.modelValue = res;
                }
            })
        } loadInitialModel();
        $scope.saveModel = function () {
            assetMasterValueService.createModel($scope.newModel, function (err, res) {
                if (!err) {
                    $scope.modelValue.push($scope.newModel);
                    $('#add-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
           
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add-modal').modal("show");
            $scope.newModel = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateModel = function () {
            delete $scope.newModel.$$hashKey
            assetMasterValueService.updateModel($scope.newModel._id, $scope.newModel, function (err, res) {
                if (!err) {
                    var index = $scope.modelValue.findIndex(function (data) {
                        return data._id == $scope.newModel._id;
                    })
                    $scope.modelValue[index] = $scope.newModel;
                    $('#add-modal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeModel = function (index) {
            $scope.newModel.splice(index, 1);
        }

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteModelSure = function () {
            assetMasterValueService.deleteAsset($scope.modelValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.modelValue.splice($scope.deleteIndex, 1);
            })
        }


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
                    $('#supplier-modal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForEdit = function (asset) {
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

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteSupplierSure = function () {
            assetMasterValueService.deleteAsset($scope.supplierValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.supplierValue.splice($scope.deleteIndex, 1);
            })
        }

    }
})();







// (function () {
//     'use strict';
//     var App = angular.module('app');
//     App.controller('masterDataCtrl', masterDataCtrl);
//     masterDataCtrl.$inject = ['$scope', 'assetMasterValueService'];
//     function masterDataCtrl($scope, assetMasterValueService) {
//         //alert("Welcome to Master");

//         $scope.masterData = {};
//         $scope.masterDataValue = [];
//         $scope.dataMode = "ADD";
//         function loadInitial() {
//             assetMasterValueService.getAllMasterData(function (err, res) {
//                 if (!err) {
//                     $scope.masterDataValue = res;
//                 }
//             })
//         }
//         loadInitial();

//         $scope.saveMasterData = function () {

//             assetMasterValueService.createMasterData($scope.masterData, function (err, res) {
//                 if (!err) {
//                     $scope.masterDataValue.push($scope.masterData);
//                     alert("Item inserted Successfully");
//                 }

//             })
//         }
//         $scope.setMasterDataForEdit = function (masterData) {
//             $scope.masterData = JSON.parse(JSON.stringify(masterData));
//             $scope.dataMode = "EDIT";
//             $("#basic-modal").modal({ backdrop: 'static', keyboard: false });
//         }
//         $scope.saveEditedMasterData = function () {
//             assetMasterValueService.updateMasterData($scope.masterData._id, $scope.masterData, function (err, res) {
//                 $scope.masterData.forEach(function (masterdata, index) {
//                     if (masterdata._id == $scope.masterData._id) {
//                         $scope.masterData[index] = $scope.masterData;
//                     }
//                 })
//             })
//             $("#basic-modal").modal('hide');
//         }
//         $scope.removeMasterData = function (index) {
//             $scope.masterDataValue.splice(index, 1);
//         }
//         $scope.askDeleteModal = function (index) {
//             $("#askDeleteModal").modal({ backdrop: 'static', keyboard: false });
//             $scope.deleteIndex = index;
//         }
//         $scope.deleteMasterDataSure = function (masterData) {
//             assetMasterValueService.deleteMasterData($scope.deleteIndex, function (err, res) {
//                 console.log("success")
//             })
//             $scope.masterDataValue.splice($scope.deleteIndex, 1);
//             $("#askDeleteModal").modal('hide');
//         }
//     }
// })();