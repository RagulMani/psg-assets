(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMaintainCtrl', assetMaintainCtrl);
    assetMaintainCtrl.$inject = ['$scope', '$stateParams', 'assetMaintainService', 'assetMasterService'];/**/
    function assetMaintainCtrl($scope, $stateParams, assetMaintainService, assetMasterService) { /**/
        // alert("welcome to maintain");
        $scope.assetMaintain = {};
        $scope.assetMaintainValue = [];
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        $scope.dataMode = "ADD";
        // $stateParams = assetId;

        assetMasterService.getAssetById($stateParams.assetId, function (err, res) {
            if (!err) {
                $scope.assetMasterValue = res;
            }
        })
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#assetModal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
        }
        $scope.updateAsset = function () {
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
        function loadInitial() {
            assetMaintainService.getAllAssetMaintain(function (err, res) {
                if (!err) {
                    $scope.assetMaintainValue = res;
                }
            })
        }
        loadInitial();
        $scope.saveAssetMaintain = function () {
            assetMaintainService.createAssetMaintain($scope.assetMaintain, function (err, res) {
                if (!err) {
                    $scope.assetMaintainValue.push($scope.assetMaintain);
                    alert("Submit Successfully");
                }
            })
        }
        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;
        }
        $scope.deleteAssetMaintain = function () {
            assetMaintainService.deleteAssetMaintain($scope.assetMaintainValue[$scope.deleteIndex]._id, function (err, res) {
                $("#confirmModal").modal('hide');
                $scope.assetMaintainValue.splice($scope.deleteIndex, 1);
            })
        }

        // $scope.imageAttachment = {
        //     dzOptions: {
        //         url: "asset/file/upload",
        //         method: "put",
        //         parallelUploads: 1,
        //         addRemoveLinks: true,
        //         acceptedFiles: 'image/jpeg, images/jpg, image/png',
        //         dictDefaultMessage: 'Click to add or drop photos',
        //         autoProcessQueue: true,
        //         createImageThumbnails: true,
        //         previewContainer: true,
        //         dictResponseError: 'Could not upload this file',
        //         paramName: function () {
        //             return "fileAttachment";
        //         },
        //         renameFile: function (file) {
        //             file.upload.filename = file.name;
        //         },
        //     },
        //     dzCallbacks: {
        //         init: function () {
        //             this.on("addedfile", function (file) {
        //             });
        //         },
        //         "sending": function (file, xhr, formData) {
        //         },
        //         "addedfile": function (file) {
        //             console.info('File added from dropzone .', file);
        //             $scope.displayFile = file.name;
        //         },
        //         "removedfile": function (file) {
        //             console.info('File removed from Server .', file);
        //             $scope.removeFile(file.id);
        //             removeFile(file);
        //         },
        //         "success": function (file, xhr) {
        //             console.info(file);
        //             file.id = xhr[0].id;
        //             file.xhr = xhr;
        //             if (!$scope.assetMaintain) {
        //                 $scope.assetMaintain = {};
        //             }
        //             $scope.assetMaintain.fileAttachmentDetails = {
        //                 "id": file.id,
        //                 "contentType": file.type,
        //                 "originalName": file.name,
        //                 "imageUrl": "asset/loadimg/" + file.id + "/" + file.name + "/" + file.type
        //             };
        //             //console.info("details",$scope.imageInput.fileAttachmentDetails);
        //         },
        //         "error": function (file) {
        //         },
        //         "complete": function (file) {
        //         }
        //     },
        //     dzMethods: {

        //     }
        // };
        // $scope.removeFile = function (id) {
        //     $scope.removeDirtyAttachment(id)
        //     $scope.assetMaintain = {};
        //     $scope.assetMaintain.fileAttachmentDetails = {};
        // }
        // $scope.removeDirtyAttachment = function (id) {
        //     $scope.dirtyFileRemoved = undefined;
        //     assetMaintainService.removeDirtyAttachment(id, function (err, res) {
        //         if (!err) {
        //             $scope.dirtyFileRemoved = true;
        //             return;
        //         }
        //         else {
        //             $scope.dirtyFileRemoved = false;
        //             return;
        //         }
        //     })
        // }

    }
})();