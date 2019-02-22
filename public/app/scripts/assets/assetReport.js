(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetReportCtrl', assetReportCtrl);
    assetReportCtrl.$inject = ['$scope', 'assetMasterService', '$timeout', '$window', 'assetMaintainService'];
    function assetReportCtrl($scope, assetMasterService, $timeout, $window, assetMaintainService) {

        $scope.goToAsset = function (asset) {
            $state.go('assetMaster', { asset: asset });
        }
        //alert("welcome");
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        $scope.assetMaintainValue = [];
        $scope.dataMode = "ADD";
        $scope.item = {};
        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
                    $scope.allData = res;
                    angular.element('#filterResult').toggle();
                    $('#dropouts-table').DataTable().clear();
                    $('#dropouts-table').DataTable().destroy();
                    $timeout(function () {
                        $('#dropouts-table').DataTable({
                            "aoColumnDefs": [{ "bSortable": false, "aTargets": [] }],

                            "footerCallback": function (row, data, start, end, display) {
                                var api = this.api(), data;

                                // Remove the formatting to get integer data for summation
                                var intVal = function (i) {
                                    // var lastThree = result[0].substring(result[0].length - 3);
                                    // var otherNumbers = result[0].substring(0, result[0].length - 3);
                                    // if (otherNumbers != '')
                                    //     lastThree = ',' + lastThree;
                                    return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
                                };
                                // Total over all pages
                                var total = api
                                    .column(8)
                                    .data()
                                    .reduce(function (a, b) {
                                        return intVal(a) + intVal(b);
                                    }, 0);
                                var total2 = api
                                    .column(9)
                                    .data()
                                    .reduce(function (a, b) {
                                        return intVal(a) + intVal(b);
                                    }, 0);
                                // Total over this page
                                var pageTotal = api
                                    .column(8, { page: 'current' })
                                    .data()
                                    .reduce(function (a, b) {
                                        return intVal(a) + intVal(b);
                                    }, 0);
                                var pageTotal2 = api
                                    .column(9, { page: 'current' })
                                    .data()
                                    .reduce(function (a, b) {
                                        return intVal(a) + intVal(b);
                                    }, 0);
                                // Update footer
                                $(api.column(8).footer()).html(
                                    '₹ ' + pageTotal + ' ( ₹ ' + total + ' Total)'
                                );
                                $(api.column(9).footer()).html(
                                    '₹ ' + pageTotal2 + ' ( ₹ ' + total2 + ' Total)'
                                );
                            }
                        });
                    }, 50);

                }
            })
        }
        loadInitial();
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
        $scope.assetFilter = function () {
            var query = {};
            if ($scope.item["assetOrganaization"]) {
                query["assetOrganaization"] = $scope.item["assetOrganaization"]["assetOrganaization"];
            }
            if ($scope.item["assetDepartment"]) {
                query["assetDepartment"] = $scope.item["assetDepartment"]["assetDepartment"];
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

            //get by query

        }
    }
})();