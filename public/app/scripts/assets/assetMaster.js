(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMasterCtrl', assetMasterCtrl);
    assetMasterCtrl.$inject = ['$scope', 'assetMasterService', '$timeout', '$window', 'assetMasterValueService'];
    function assetMasterCtrl($scope, assetMasterService, $timeout, $window, assetMasterValueService) {

        $scope.goToAsset = function (asset) {
            $state.go('assetMaster', { asset: asset });
        }
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        $scope.assetFilter = [];
        $scope.asset = [];
        $scope.assetMaintainValue = [];
        $scope.newData = [];
        $scope.dataMode = "ADD";
        $scope.item = {};
        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
                    $scope.allData = res;
                    $scope.newOrg = unique("assetOrganaization");
                    $scope.newDept = unique("assetDepartment");
                    $scope.newLocation = unique("assetLocation");
                    $scope.newCate = unique("assetCategoryType");
                    $scope.newStatus = unique("assetStatus");
                    // straightLine(allData);
                    angular.element('#filterResult').toggle();
                    $('#dropouts-table').DataTable().clear();
                    $('#dropouts-table').DataTable().destroy();
                    $timeout(function () {
                        $('#dropouts-table').DataTable({
                            "aoColumnDefs": [{ "bSortable": false, "aTargets": [] }]
                        });
                    }, 50);
                }
            })
        }
        loadInitial();
        assetMasterValueService.getAllInstitution(function (err, res) {
            if (!err) {
                $scope.institutions = res;
            }
        })
        assetMasterValueService.getAllCategories(function(err,res){
            if(!err){
                $scope.categories=res;
            }
        })
        assetMasterValueService.getAllInsurance(function(err,res){
            if(!err){
                $scope.insuranceValues=res;
            }
        })
        assetMasterValueService.getAllContract(function(err,res){
            if(!err){
                $scope.contractValues=res;
            }
        })
        assetMasterValueService.getAllFund(function(err,res){
            if(!err){
                $scope.fundValues=res;
            }
        })

        
        $scope.saveAsset = function () {
            assetMasterService.createAsset($scope.newAsset, function (err, res) {
                if (!err) {
                    $scope.assetMasterValue.push($scope.newAsset);
                    $('#assetModal').modal("hide");
                    alert("Data inserted successfully");
                }
            })
            $("#assetModal").modal('hide');
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#assetModal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
            //alert("item updated Successfully");

        }
        $scope.updateAsset = function () {
            delete $scope.newAsset.$$hashKey
            assetMasterService.updateAsset($scope.newAsset._id, $scope.newAsset, function (err, res) {
                if (!err) {
                    var index = $scope.assetMasterValue.findIndex(function (data) {
                        return data._id == $scope.newAsset._id;
                    })
                    $scope.assetMasterValue[index] = $scope.newAsset;
                    $('#assetModal').modal('hide');
                }
                alert("item updated Successfully");
            })
        }
        $scope.removeAsset = function (index) {
            $scope.newAsset.splice(index, 1);
        }
        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }
        $scope.deleteAssetSure = function () {
            assetMasterService.deleteAsset($scope.assetMasterValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.assetMasterValue.splice($scope.deleteIndex, 1);
            })
        }
        $scope.imageAttachment = {
            dzOptions: {
                url: "asset/file/upload",
                method: "put",
                parallelUploads: 1,
                addRemoveLinks: true,
                acceptedFiles: 'image/jpeg, images/jpg, image/png',
                dictDefaultMessage: 'Click to add or drop photos',
                autoProcessQueue: true,
                createImageThumbnails: true,
                previewContainer: true,
                dictResponseError: 'Could not upload this file',
                paramName: function () {
                    return "fileAttachment";
                },
                renameFile: function (file) {
                    file.upload.filename = file.name;
                },
            },
            dzCallbacks: {
                init: function () {
                    this.on("addedfile", function (file) {
                    });
                },
                "sending": function (file, xhr, formData) {
                },
                "addedfile": function (file) {
                    console.info('File added from dropzone .', file);
                    $scope.displayFile = file.name;
                },
                "removedfile": function (file) {
                    console.info('File removed from Server .', file);
                    $scope.removeFile(file.id);
                    removeFile(file);
                },
                "success": function (file, xhr) {
                    console.info(file);
                    file.id = xhr[0].id;
                    file.xhr = xhr;
                    if (!$scope.newAsset) {
                        $scope.newAsset = {};
                    }
                    $scope.newAsset.fileAttachmentDetails = {
                        "id": file.id,
                        "contentType": file.type,
                        "originalName": file.name,
                        "imageUrl": "asset/loadimg/" + file.id + "/" + file.name + "/" + file.type
                    };
                    //console.info("details",$scope.imageInput.fileAttachmentDetails);
                },
                "error": function (file) {
                },
                "complete": function (file) {
                }
            },
            dzMethods: {

            }
        };
        $scope.removeFile = function (id) {
            $scope.removeDirtyAttachment(id)
            $scope.newAsset = {};
            $scope.newAsset.fileAttachmentDetails = {};
        }
        $scope.removeDirtyAttachment = function (id) {
            $scope.dirtyFileRemoved = undefined;
            assetMasterService.removeDirtyAttachment(id, function (err, res) {
                if (!err) {
                    $scope.dirtyFileRemoved = true;
                    return;
                }
                else {
                    $scope.dirtyFileRemoved = false;
                    return;
                }
            })
        }

        function unique(key) {
            var newArr = [];
            var origLen = $scope.allData.length;
            var found;
            var x;
            var y;
            for (x = 0; x < origLen; x++) {
                found = undefined;
                for (y = 0; y < newArr.length; y++) {
                    if ($scope.allData[x][key] === newArr[y][key]) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    newArr.push($scope.allData[x]);
                }
            }
            return newArr;
        }
        //  straightLine();
        // function straightLine() {
        //     $scope.depriciation =( ($scope.item["assetPurchaseCost"] - $scope.item["residualvalue"])/($scope.item["assetDepreciation"]));
        //     $scope.depriciation = ((45000 - 2500) / 3);
        // }
        $scope.assetFilter = function () {
            var query = {};
            if ($scope.item["assetOrganaization"]) {
                query["assetOrganaization"] = $scope.item["assetOrganaization"]["assetOrganaization"];
            }
            if ($scope.item["assetLocation"]) {
                query["assetLocation"] = $scope.item["assetLocation"]["assetLocation"];
            }
            if ($scope.item["assetCategoryType"]) {
                query["assetCategoryType"] = $scope.item["assetCategoryType"]["assetCategoryType"];
            }
            if ($scope.item["assetDepartment"]) {
                query["assetDepartment"] = $scope.item["assetDepartment"]["assetDepartment"];
            }
            if ($scope.item["assetStatus"]) {
                query["assetStatus"] = $scope.item["assetStatus"]["assetStatus"];
            }
            if ($scope.item["fromDate"]) {
                query["assetPurchaseDate"] = { $gte: $scope.item["fromDate"] };
            }
            if ($scope.item["endDate"]) {
                query["assetPurchaseDate"] = { $lte: $scope.item["endDate"] };
            }
            assetMasterService.getAssetByQuery(query, function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
                }
                else {
                    console.log(err);
                }

            });
        }

        // $scope.DatewiseJson = {
        //     "type": "area",
        //     "plotarea": {
        //         margin: "dynamic"
        //     },
        //     "plot": {
        //         "stacked": false,
        //     },
        //     "scale-x": {
        //         "labels": ["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6", "Date 7", "Date 8", "Date 9", "Date 10"] /* Scale Labels */
        //     },
        //     "series": [{
        //         "values": [20, 40, 25, 50, 15, 45, 33, 34],
        //         "background-color": "#EDE7F0",
        //         /* Single color or gradient (2 colors) */
        //         "line-color": "#AD6BAE",
        //         "alpha-area": 0.3,
        //         /* Shaded region transparency */
        //         "marker": {
        //             "background-color": "#5D436A",
        //             "border-width": "5px",
        //             "border-color": "#B0B3DC"
        //         }
        //     }]
        // };
        // $timeout(function(){
        //     // alert("welcome");
        //     zingchart.render({
        //         id: 'datewise',
        //         data: DatewiseJson,
        //         defaultsurl: 'assets/css/zingchart_color.txt', // Path to my_theme.txt
        //     });
        // },5000)


    }
})();