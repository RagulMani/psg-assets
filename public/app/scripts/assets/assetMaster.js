(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMasterCtrl', assetMasterCtrl);
    assetMasterCtrl.$inject = ['$scope', 'assetMasterService', '$timeout', '$window'];
    function assetMasterCtrl($scope, assetMasterService, $timeout, $window) {
        //alert("welcome");
        $scope.newAsset = {};
        $scope.assetMasterValue = [];
        $scope.dataMode = "ADD";

        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
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

        $scope.fileAttachmentAwards = {
            dzOptions: {
                url: "asset/file/upload",
                method: "put",
                parallelUploads: 1,
                addRemoveLinks: true,
                acceptedFiles: 'image/jpeg, images/jpg, image/png',
                dictDefaultMessage: 'Click to add or drop photos',
                autoProcessQueue: true,
                createImageThumbnails:false,
                previewsContainer: false,
                dictResponseError: 'Could not upload this file',
                paramName: function () {
                    return "fileAttachment";
                },
                renameFile: function (file) {
                    file.upload.filename = file.name;

                },
                // headers: {
                //     Authorization: $rootScope.bypassId
                // }
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
                    file.id = xhr[0].id;
                    file.xhr = xhr;
                    $scope.newAsset.fileAttachmentDetails = {
                        "id": file.id,
                        "contentType": file.type,
                        "originalName": file.name,
                        "imageUrl": "/assets/loadimg/" + file.id + "/" + file.name + "/" + file.type
                    };

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
            $scope.awardInput.fileAttachmentDetails = {};
        }

$scope.removeDirtyAttachment = function (id) {
            $scope.dirtyFileRemoved = undefined;
            groupsServices.removeDirtyAttachment(id, function (err, res) {
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
        // $scope.submitForm = function() {
        //     if(new ValidationService().checkFormValidity($scope.newAssetform)) {
        //       alert('All good, proceed with submit...');
        //     }
        //   }
    }

})();