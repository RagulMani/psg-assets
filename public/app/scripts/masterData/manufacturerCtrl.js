(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('manufacturerCtrl', manufacturerCtrl);
    manufacturerCtrl.$inject = ['$scope', 'assetMasterValueService', '$timeout', '$window'];
    function manufacturerCtrl($scope, assetMasterValueService, $timeout, $window) {

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
                    if (!$scope.newManufacturer) {
                        $scope.newManufacturer = {};
                    }
                    $scope.newManufacturer.fileAttachmentDetails = {
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
            $scope.newManufacturer = {};
            $scope.newManufacturer.fileAttachmentDetails = {};
        }
        $scope.removeDirtyAttachment = function (id) {
            $scope.dirtyFileRemoved = undefined;
            assetMasterValueService.removeDirtyAttachment(id, function (err, res) {
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
    }
}
)();