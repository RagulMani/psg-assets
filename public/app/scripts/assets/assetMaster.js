
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
        $scope.asset = [];
        $scope.assetMaintainValue = [];
        $scope.newData = [];
        $scope.dataMode = "ADD";
        $scope.itemNew = {};
        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasterValue = res;
                    $scope.allData = res;
                    $scope.newOrg = unique("institution");
                    $scope.newDept = unique("institution");
                    $scope.newLocation = unique("assetLocation");
                    $scope.newCate = unique("Category");
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
        // function myFunction() {
        //     var x = document.getElementById("demo")
        //     x.innerHTML = Math.floor((Math.random() * 100000000) + 1);
        //   }
        //   myFunction();
        assetMasterValueService.getAllInstitution(function (err, res) {
            if (!err) {
                $scope.institutions = res;
            }
        })
        assetMasterValueService.getAllLocation(function (err, res) {
            if (!err) {
                $scope.locationValue = res;
            }
        })
        assetMasterValueService.getAllCategories(function (err, res) {
            if (!err) {
                $scope.categories = res;
            }
        })
        assetMasterValueService.getAllInsurance(function (err, res) {
            if (!err) {
                $scope.insuranceValues = res;
            }
        })
        assetMasterValueService.getAllContract(function (err, res) {
            if (!err) {
                $scope.contractValues = res;
            }
        })
        assetMasterValueService.getAllFund(function (err, res) {
            if (!err) {
                $scope.fundValues = res;
            }
        })
        assetMasterValueService.getAllSupplier(function (err, res) {
            if (!err) {
                $scope.supplierValues = res;
            }
        })

        // $scope.$watch(function(scope) { return scope.data.myVar },
        //       function(newValue, oldValue) {
        //           document.getElementById("").innerHTML =
        //               "" + newValue + "";
        //       }
        //      );

        $scope.saveAsset = function () {
            assetMasterService.createAsset($scope.newAsset, function (err, res) {
                if (!err) {
                    $scope.assetMasterValue.push($scope.newAsset);
                    $('#assetModal').modal("hide");
                    alert("Data inserted successfully");
                    // $('#success-model').model("show");
                }
            })
            $("#assetModal").modal('hide');
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#assetModal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
            //alert("itemNew updated Successfully");

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
                alert("itemNew updated Successfully");
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
        $scope.assetFilter = function (text) {
            console.log(text);
            var query = {};
            if ($scope.newAsset["institution"]) {
                query["institution.institutionName"] = $scope.newAsset["institution"]["institutionName"];
            }
            if ($scope.newAsset["assetLocation"]) {
                query["assetLocation"] = $scope.newAsset["assetLocation"];
            }
            if ($scope.newAsset["Category"]) {
                query["Category.CategoryType"] = $scope.newAsset["Category"]["CategoryType"];
            }
            if ($scope.newAsset["department"]) {
                query["department.pathName"] = $scope.newAsset["department"]["pathName"];
            }
            if ($scope.itemNew["assetStatus"]) {
                query["assetStatus"] = $scope.itemNew["assetStatus"];
            }
            if ($scope.itemNew["fromDate"]) {
                query["assetPurchaseDate"] = { $gte: $scope.itemNew["fromDate"] };
            }
            if ($scope.itemNew["endDate"]) {
                query["assetPurchaseDate"] = { $lte: $scope.itemNew["endDate"] };
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
        var streamAdmissions = {
            type: "bar",
            "plot": {
                "value-box": {
                    "text": "%v",
                    "placement": "top-in",
                    "font-color": "white"
                }
            },
            "plotarea": {
                "margin": "30px"
            },
            "legend": {
                "highlight-plot": true,
                "layout": "1x3",
                "y": "-10px",
                "shadow": false,
                "border-width": 0,
            },
            "scale-x": {
                "labels": ["Arts", "Commerce", "Science", "Vocational"] /* Scale Labels */
            },
            "series": [{
                "values": [20, 40, 25, 50],
                "text": "Sanctioned",


            }, {
                "values": [10, 25, 5, 60],
                "text": "Admitted",

            }, {
                "values": [59, 50, 28, 33],
                "text": "Vacant",

            }

            ]
        };
        zingchart.render({
            id: 'StreamAdmissions',
            data: streamAdmissions,
            defaultsurl: 'assets/css/zingchart_color.txt', // Path to my_theme.txt
        });
        var enrollmentsJson = {
            "type": "bar",
            "scale-x": {
                "labels": ["RASHTRIYA UCHCHATAR SHIKSHA ABHIYAN", "Awaaz Yojana", "Moulana Azad Education Fund"] /* Scale Labels */
            },
            "plotarea": {
                "margin": "60px"
            },

            "plot": {
                "value-box": {
                    "text": "%v",
                    "placement": "bottom-in",
                    "font-color": "white"
                }
            },
            "series": [{
                "values": [5000000, 1000000, 2500000],

            },

            ]
        };
        zingchart.render({
            id: 'Enrollments',
            data: enrollmentsJson,
            defaultsurl: 'assets/css/zingchart_color.txt', // Path to my_theme.txt
        });
        var communityEnrollmentsJson = {
            "type": "pie",
            "plotarea": {
                "margin": "30px"
            },
            "legend": {
                "itemNew": {
                    "margin-right": "0",

                },
                "highlight-plot": true,
                "layout": "horizontal",
                "overflow": "page",
                "y": "-10px",
                "shadow": false,
                "border-width": 0,
            },
            "plot": {},
            "series": [{
                "values": [35],
                "text": "Buildings",
            }, {
                "values": [575],
                "text": "Computer Equipment",
            }, {
                "values": [252],
                "text": "Software",
            }, {
                "values": [110],
                "text": "Equipment",
            }, {
                "values": [84],
                "text": "Vehicles",
            }, {
                "values": [38],
                "text": "Furniture",
            }]
        };
        zingchart.render({
            id: 'CommunityEnrollments',
            data: communityEnrollmentsJson,
            defaultsurl: 'assets/css/zingchart_color.txt', // Path to my_theme.txt
        });
        var cutOffJson = {
            type: "hbar",
            "plot": {
                "stacked": true,
                "value-box": {
                    "text": "%v",
                    "placement": "top-in",
                    "font-color": "white"
                }
            },
            "plotarea": {
                "margin": "30px 30px 30px 60px"
            },
            "legend": {
                "highlight-plot": true,
                "layout": "1x7",
                "y": "-10px",
                "shadow": false,
                "border-width": 0

            },
            "scale-x": {
                "labels": ["520-560", "560-600", "600-640", "640-680", "680-720", "720-760", "760-800"] /* Scale Labels */
            },
            "series": [{
                "values": [20, 40, 25, 50, 70, 30, 5],
                "text": "CBSE",
                "opacity": 0.1

            }, {
                "values": [10, 50, 5, 15, 30, 10, 45],
                "text": "Defense",

            }, {
                "values": [30, 10, 25, 45, 10, 40, 65],
                "text": "Free Seats",

            }, {
                "values": [6, 8, 5, 4, 23, 32, 45],
                "text": "Merit",

            }, {
                "values": [3, 2, 5, 4, 10, 8, 6],
                "text": "Management",

            }, {
                "values": [1, 2, 5, 4, 3, 4, 6],
                "text": "Sports",

            }

            ]
        };
        zingchart.render({
            id: 'CutOff',
            data: cutOffJson,
            defaultsurl: 'assets/css/zingchart_color.txt', // Path to my_theme.txt
        });
        loadSuggestionsForGroups({ type: "DEPARTMENT" });
        function loadSuggestionsForGroups(searchPara) {
            var filterQuery = searchPara;
            assetMasterService.getSelectedNodes(filterQuery, function (err, res) {
                if (!err) {
                    $scope.availableGroups = res;
                }
                else {
                    console.log("error" + err);
                }
            })

        }
    }

})();