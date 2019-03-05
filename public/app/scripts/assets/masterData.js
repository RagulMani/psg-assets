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
        $scope.setEnvironmentForManuEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#manufacturer-modal').modal("show");
            $scope.newManufacturer = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateManufacturer = function () {
            delete $scope.newManufacturer.$$hashKey
            assetMasterValueService.updateManufacturer($scope.newManufacturer._id, $scope.newManufacturer, function (err, res) {
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

        $scope.manuDeleteModal = function (index) {
            $("#manuDeleteModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteManufacturerSure = function () {
            assetMasterValueService.deleteManufacturer($scope.manufacturerValue[$scope.deleteIndex]._id, function (err, res) {
                $("#manuDeleteModal").modal('hide');
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
        $scope.setEnvironmentForModelEdit = function (asset) {
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

        $scope.modelDeleteModal = function (index) {
            $("#modelDeleteModal").modal("show");
            $scope.deleteIndex = index;
        }

        $scope.deleteModelSure = function () {
            assetMasterValueService.deleteModel($scope.modelValue[$scope.deleteIndex]._id, function (err, res) {
                $("#modelDeleteModal").modal('hide');
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

        $scope.newFund = {};
        $scope.fundValue = [];
        $scope.dataMode = "ADD";
        function loadInitialFund() {
            assetMasterValueService.getAllFund(function (err, res) {
                if (!err) {
                    $scope.fundValue = res;
                }
            })
        }
        loadInitialFund();
        $scope.saveFund = function () {
            assetMasterValueService.createFund($scope.newFund, function (err, res) {
                if (!err) {
                    $scope.fundValue.push($scope.newFund);
                    $('#add_fund').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForFundEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add_fund').modal("show");
            $scope.newFund = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateFund = function () {
            delete $scope.newFund.$$hashKey
            assetMasterValueService.updateFund($scope.newFund._id, $scope.newFund, function (err, res) {
                if (!err) {
                    var index = $scope.fundValue.findIndex(function (data) {
                        return data._id == $scope.newFund._id;
                    })
                    $scope.fundValue[index] = $scope.newFund;
                    $('#add_fund').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeFund = function (index) {
            $scope.newFund.splice(index, 1);
        }

        $scope.fundDeleteModal = function (index) {
            $("#fundDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteFundSure = function () {
            assetMasterValueService.deleteFund($scope.fundValue[$scope.deleteIndex]._id, function (err, res) {
                $("#fundDeleteModal").modal('hide');
                $scope.fundValue.splice($scope.deleteIndex, 1);
            })
        }

        $scope.newContract = {};
        $scope.contractValue = [];
        $scope.dataMode = "ADD";
        function loadInitialContract() {
            assetMasterValueService.getAllContract(function (err, res) {
                if (!err) {
                    $scope.contractValue = res;
                }
            })
        }
        loadInitialContract();
        $scope.saveContract = function () {
            assetMasterValueService.createContract($scope.newContract, function (err, res) {
                if (!err) {
                    $scope.contractValue.push($scope.newContract);
                    $('#add_contract').modal("hide");
                    alert("Data inserted successfully");
                }
            })
        }
        $scope.setEnvironmentForContractEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#add_contract').modal("show");
            $scope.newContract = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateContract = function () {
            delete $scope.newContract.$$hashKey
            assetMasterValueService.updateContract($scope.newContract._id, $scope.newContract, function (err, res) {
                if (!err) {
                    var index = $scope.contractValue.findIndex(function (data) {
                        return data._id == $scope.newContract._id;
                    })
                    $scope.contractValue[index] = $scope.newContract;
                    $('#add_contract').modal('hide');
                }
                alert("item updated Successfully");
            })
        }

        $scope.removeContract = function (index) {
            $scope.newContract.splice(index, 1);
        }
        $scope.contractDeleteModal = function (index) {
            $("#contractDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }

        $scope.deleteContractSure = function () {
            assetMasterValueService.deleteContract($scope.contractValue[$scope.deleteIndex]._id, function (err, res) {
                $("#contractDeleteModal").modal('hide');
                $scope.contractValue.splice($scope.deleteIndex, 1);
            })
        }
    }
})();


