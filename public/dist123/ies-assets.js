(function () {
    'use strict';
    var App = angular.module('app', [
        'ui.router',
        'ngSanitize',
        'oc.lazyLoad',
        'angular-flatpickr',
        'ui.select',
        'ui.tinymce',
        'zingchart-angularjs',
        'app.auth'

    ]);
    App.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/assetMaster');
            $stateProvider
                .state('assetMaster', {
                    url: '/assetMaster',
                    templateUrl: 'app/modules/assets/assetMaster.html',
                    controller: 'assetMasterCtrl',
                    /*resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/dropzone/dist/dropzone.css',
                                    'bower_components/dropzone/dist/dropzone.js',
                                    'bower_components/ng-dropzone/dist/ng-dropzone.min.js',
                                    'bower_components/tinymce/tinymce.js',
                                    'bower_components/angular-ui-tinymce/src/tinymce.js',
                                    'bower_components/angular-tree-control/css/tree-control.css',
                                    'bower_components/angular-tree-control/css/tree-control-attribute.css',
                                    'bower_components/angular-tree-control/angular-tree-control.js',
                                    'bower_components/flatpickr/dist/flatpickr.min.css',
                                    'bower_components/flatpickr/dist/flatpickr.min.js',
                                    'bower_components/angular-flatpickr/dist/ng-flatpickr.js',
                                    'bower_components/datatables.net-dt/css/jquery.dataTables.min.css',
                                    'bower_components/datatables.net/js/jquery.dataTables.min.js',
                                ]
                            });
                        }]
                    }*/
                })

                .state('form', {
                    url: '/assetMaster',
                    templateUrl: 'app/modules/assets/assetForm.html',
                    controller: 'assetMasterCtrl'

                })

                .state('model', {
                    url: '/assetMaster',
                    templateUrl: 'app/modules/assets/model.html',
                    controller: 'assetMasterCtrl'

                })
                .state('supplier', {
                    url: '/assetMaster',
                    templateUrl: 'app/modules/assets/supplier.html',
                    controller: 'assetMasterCtrl'

                })
                .state('status', {
                    url: '/assetMaster',
                    templateUrl: 'app/modules/assets/status.html',
                    controller: 'assetMasterCtrl'

                })
                .state('viewAsset', {
                    url: '/viewAsset',
                    templateUrl: 'app/modules/assets/viewAsset.html',
                    controller: 'assetMasterCtrl'
                })

                .state('editAsset', {
                    url: '/editAsset/:id',
                    templateUrl: 'app/modules/assets/editAsset.html',
                    params:
                    {
                        'asset': 'asset'
                    },
                    controller: 'assetMasterViewCtrl'
                })

                .state('depreciationReport', {
                    url: '/depreciationReport',
                    templateUrl: 'app/modules/assets/depreciationReport.html',
                    controller: 'assetMasterCtrl'
                })
                .state('assetMaintanance', {
                    url: '/assetMaintanance',
                    templateUrl: 'app/modules/assets/assetMaintanance.html',
                    controller: 'assetMasterCtrl'

                })
                .state('masterData', {
                    url: '/masterData',
                    templateUrl: 'app/modules/assets/masterData.html',
                    controller: 'masterDataCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/ng-tags-input/ng-tags-input.css',
                                    'bower_components/ng-tags-input/ng-tags-input.js',
                                ]
                            });
                        }]
                    }
                })
                .state('institution', {
                    url: '/institution',
                    templateUrl: 'app/modules/assets/institution.html',
                    controller: 'masterDataCtrl'

                })


                .state('licenseMaster', {
                    url: '/licenseMaster',
                    templateUrl: 'app/modules/license/licenseMaster.html',
                    controller: 'licenseCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/ng-tags-input/ng-tags-input.css',
                                    'bower_components/ng-tags-input/ng-tags-input.js',
                                ]
                            });
                        }]
                    }
                })
                .state('license', {
                    url: '/assets',
                    templateUrl: 'app/modules/assets/license.html',
                    controller: 'licenseCtrl'

                })

                .state('licenseReport', {
                    url: '/licenseReport',
                    templateUrl: 'app/modules/license/licenseReport.html',
                    controller: 'licenseCtrl'
                })
                .state('component', {
                    url: '/component',
                    templateUrl: 'app/modules/assets/component.html',
                    controller: 'componentCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-bootstrap',
                                serie: true,
                                files: [
                                    'bower_components/ng-tags-input/ng-tags-input.css',
                                    'bower_components/ng-tags-input/ng-tags-input.js',
                                ]
                            });
                        }]
                    }
                })


        }
    ]);
    App.controller('AppCtrl', ['$scope', '$window', '$timeout',
        function ($scope, $window, $timeout) {


            //Standard Table Filter Collapse
            $scope.filterCollapse = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('.get-collapse').parent().removeClass('selected');
                angular.element(thisElement).parent().toggleClass('selected');
                angular.element('#getData').hide();
                angular.element('#filterResult').toggle();
            }

            //Data Collapse
            $scope.dataCollapse = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('.filter-collapse').parent().removeClass('selected');
                angular.element(thisElement).parent().toggleClass('selected');
                angular.element('#filterResult').hide();
                angular.element('#getData').toggle();
            }

            //Sidebar Collapse
            $scope.sidebarCollapseHide = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('#leftColumn').toggle("silde");
                $timeout(function () {
                    angular.element('#rightColumn').toggleClass('col-md-12');
                    angular.element('#siderbarCollapseShow').toggleClass('d-flex');
                }, 150);
            }
            $scope.sidebarCollapseShow = function ($event) {
                var thisElement = $event.currentTarget;
                angular.element('#siderbarCollapseShow').toggleClass('d-flex');
                angular.element('#rightColumn').toggleClass('col-md-12');
                angular.element('#leftColumn').toggle("silde");
            }

        }
    ]);
    App.controller('HeaderCtrl', ['$scope', '$window', '$rootScope',
        function ($scope, $window, $rootScope) {
            $scope.logout = function () {
                $rootScope.Auth.logout();
            }
            /*console.log($rootScope.$state.current.name);
             $rootScope.toggleLeftSection = function ($event) {
                 angular.element($event.currentTarget).children('i').toggleClass('la-indent')
                 angular.element('#treeSection').toggleClass('d-none');
                 angular.element('#gridSection').toggleClass('col-md-12');
             }*/
        }
    ]);
})();
(
    function bootstrap() {
        //initialize and login to keycloak as well as attach event handlers
        angular.module('app').run(['$rootScope', '$location', 'Auth', 'rolesToEntitlements', 'roleToStates', '$http', runKeycloak]);
        function runKeycloak($rootScope, $location, Auth, rolesToEntitlements, roleToStates, $http) {
            $rootScope.Auth = Auth;

            //initial bootstrapping of angular
            injectUserTokenIntoHttpHeader(Auth);

            // register auth change function
            Auth.onauthChange = function () {
                // on token refresh
                injectUserTokenIntoHttpHeader(Auth);
            }

            function injectUserTokenIntoHttpHeader(Auth) {
                var token = "Bearer " + Auth.token;
                $http.defaults.headers.common['Authorization'] = 'annasarpprasanna';
            }

            //login to keycloak
            $rootScope.$on("event:auth-loginRequired", function () {
                console.log("Event auth-loginRequired acquired")
                var loginOptions = {
                    redirectUri: window.location,
                    prompt: "none",
                    maxAge: 3600,
                    loginHint: "",
                    action: "login",
                    locale: "en"
                };
                console.log(createLoginUrl(loginOptions));
                Auth.login(loginOptions);
            });
        }////end init
    }
)();

;

(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('assetMasterCtrl', assetMasterCtrl);
    assetMasterCtrl.$inject = ['$scope', /*'$stateparams',*/ 'assetMasterService'];
    function assetMasterCtrl($scope, /*$stateparams,*/ assetMasterService) {
        //alert("welcome");
        $scope.newAsset = {};
        $scope.assetMasters = [];
        //$scope.assetStatus=$assetParams.asset;
        //$scope.status=["Pending","Ready to deploy", "Deployed", "Archived", "Broken", "Lost/Stolen", "Out for maintenance", "Scraped"]
        $scope.dataMode = "ADD";
        // $scope.goToAsset = function (id) {
        //     $state.go('editAsset', { id: id });
        // }

        function loadInitial() {
            assetMasterService.getAllAsset(function (err, res) {
                if (!err) {
                    $scope.assetMasters = res;
                }
            })
        }
        // assetMasterService.getAllMasterData(function (err, res) {
        //     if (!err) {
        //         $scope.mastersDatas = res;
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
                    $scope.assetMasters.push($scope.newAsset);
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
                    var index = $scope.assetMasters.findIndex(function (data) {
                        return data._id == $scope.newAsset._id;
                    });
                    $scope.assetMasters[index] = $scope.newAsset;
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
                $scope.assetMasters.splice($scope.deleteIndex, 4);
            })
        }
    }

})();
/*$scope.deleteAsset = function () {
   // $scope.newAsset = JSON.parse(JSON.stringify(newAsset));
    //delete $scope.newAsset.$$hashKey
    assetMasterService.deleteAsset($scope.newAsset._id, $scope.newAsset, function (err, res) {
    if (!err) {
        
        var index = $scope.assetMasters.findIndex(function (data){
             return data._id == newAsset._id;
    });
    $scope.assetMasters[index] = $scope.newAsset;
    $scope.assetMasters.splice(index, 1);
        
    }
})
}
 assetMasterService.deleteAsset($scope.deleteIndex, function (err, res) {
        if (!err) {
        
            var index = $scope.assetMasters.findIndex(function (){
                 return data._id == newAsset._id;
        });
    }            
    $scope.assetMasters.splice($scope.deleteIndex, 1);
    $("#confirmModal").modal('hide');
})
*/

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


(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('componentCtrl', componentCtrl);
    componentCtrl.$inject = ['$scope', 'assetMasterService'];
    function componentCtrl($scope, assetMasterService) {
        $scope.newComponent = {};
        $scope.newComponent.features = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllComponent(function (err, res) {
                if (!err) {
                    $scope.mastersData = res;

                }

            })
        }
        loadInitial()
        $scope.saveNewComponent = function () {
            $("#basic-modal").modal('hide');
            $scope.masterData.values.forEach(function (item, index) {
                $scope.masterData.values[index] = item.toUpperCase();
            })
            assetMasterService.createComponent($scope.masterData, function (err, res) {
                if (!err) {
                    $scope.mastersData.push(res);
                }

            })
        }

    }
});;

// (function () {
//     'use strict';
//     var App = angular.module('app');
//     App.controller('assetCtrl', assetCtrl);
//     assetCtrl.$inject = ['$scope', 'assetMasterService'];
//     function assetCtrl($scope, assetMasterService) {
//         $scope.newAsset = {};  
//         $scope.asset = [];    
//         assetMasterService.getAllMasterData(function (err, res) {
//                 if (!err) {
//                     $scope.mastersData = res;                
//                 }        
//             })

//         $scope.saveAsset = function () {
//             assetMasterService.createAsset($scope.newAsset, function (err, res) {
//                 if (!err) {
//                     $scope.asset.push($scope.newAsset);
//                     alert("Submit Successfully");

//                 }
//             })
//         }
//     }
// })();                   
// ;
(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('licenseCtrl', licenseCtrl);
    licenseCtrl.$inject = ['$scope', 'assetMasterService'];
    function licenseCtrl($scope, assetMasterService) {
        // alert("Welcome to License");
        $scope.newLicense = {};
        $scope.licenseMasters = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllLicense(function (err, res) {
                if (!err) {
                    $scope.mastersData = res;

                }

            })
        }
        loadInitial()
        $scope.saveLicense = function () {
            // $("#license-modal").modal('hide');
            assetMasterService.createLicense($scope.newLicense, function (err, res) {
                if (!err) {
                    $scope.licenseMasters.push($scope.newLicense);
                    // $('#license-modal').modal("hide");
                    alert("Data inserted successfully");

                }
            })
        }
        $scope.setEnvironmentForEdit = function (asset) {
            $scope.dataMode = "EDIT";
            $('#license-modal').modal("show");
            $scope.newAsset = JSON.parse(JSON.stringify(asset));
            //alert("item Deleted Successfully");

        }
        $scope.updateLicense = function () {
            delete $scope.newLicense.$$hashKey
            assetMasterService.updateLicense($scope.newLicense._id, $scope.newAsset, function (err, res) {
                if (!err) {
                    var index = $scope.assetMasters.findIndex(function (data) {
                        return data._id == $scope.newLicense._id;
                    });
                    $scope.licenseMasters[index] = $scope.newLicense;
                    //  $('#license-modal').modal('hide');
                }
            });
        }
        $scope.removeLicense = function (index) {
            $scope.newLicense.splice(index, 1);
        }

        $scope.confirmModal = function (index) {
            $("#confirmModal").modal("show");
            $scope.deleteIndex = index;

        }
        $scope.deleteLicenseSure = function () {
            assetMasterService.deleteLicense($scope.deleteIndex, function (err, res) {
            })

            $scope.licenseMasters.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');

        }
    }

})();
/*$scope.deleteLicense = function () {
    // $scope.newLicense = JSON.parse(JSON.stringify(newLicense));
    //delete $scope.newLicense.$$hashKey
    assetMasterService.deleteAsset($scope.newLicense._id, $scope.newLicense, function (err, res) {
        if (!err) {

            var index = $scope.licenseMasters.findIndex(function (data) {
                return data._id == newLicense._id;
            });
            $scope.licenseMasters[index] = $scope.newLicense;
            $scope.licenseMasters.splice(index, 1);

        }
    })
}
assetMasterService.deleteLicense($scope.deleteIndex, function (err, res) {
    if (!err) {

        var index = $scope.licenseMasters.findIndex(function () {
            return data._id == newLicense._id;
        });
    }
    $scope.licenseMasters.splice($scope.deleteIndex, 1);
    $("#confirmModal").modal('hide');
})



*/


/* $scope.deleteAsset = function () {
           // $scope.newAsset = JSON.parse(JSON.stringify(newAsset));
            //delete $scope.newAsset.$$hashKey
            assetMasterService.deleteAsset($scope.newAsset._id, $scope.newAsset, function (err, res) {
            if (!err) {
                
                var index = $scope.assetMasters.findIndex(function (data){
                     return data._id == newAsset._id;
            });
            $scope.assetMasters[index] = $scope.newAsset;
            $scope.assetMasters.splice(index, 1);
                
            }
        })
        }
         assetMasterService.deleteAsset($scope.deleteIndex, function (err, res) {
                if (!err) {
                
                    var index = $scope.assetMasters.findIndex(function (){
                         return data._id == newAsset._id;
                });
            }            
            $scope.assetMasters.splice($scope.deleteIndex, 1);
            $("#confirmModal").modal('hide');
        })
        */
;
(function () {
    'use strict';
    var App = angular.module('app');
    App.controller('masterDataCtrl', masterDataCtrl);
    masterDataCtrl.$inject = ['$scope', 'assetMasterService'];
    function masterDataCtrl($scope, assetMasterService) {
        //alert("Welcome to Master");

        $scope.masterData = {};
        $scope.masterDatas = [];
        $scope.dataMode = "ADD";
        function loadInitial() {
            assetMasterService.getAllMasterData(function (err, res) {
                if (!err) {
                    $scope.mastersDatas = res;
                }
            })
        }
        loadInitial();
        /*function showUnique() {
            groupsServices.getDistinctValues("type", {}, function (err, res) {
                if (!err) {
                    $scope.availbleTypes = res;
                }
            })*/
        $scope.saveMasterData = function () {
            // if ($scope.masterData.key) {
            //    $scope.typeExistError = "";
            // $("#basic-modal").modal('hide');
            // $scope.masterDatas.forEach(function (item, index) {
            //     $scope.masterDatas[index] = item.toUpperCase();
            // })
            assetMasterService.createMasterData($scope.masterData, function (err, res) {
                if (!err) {
                    $scope.masterDatas.push($scope.masterData);
                    alert("Item inserted Successfully");
                }

            })
        }
        $scope.setMasterDataForEdit = function (masterData) {
            $scope.masterData = JSON.parse(JSON.stringify(masterData));
            $scope.dataMode = "EDIT";
            $("#basic-modal").modal({ backdrop: 'static', keyboard: false });
        }
        $scope.saveEditedMasterData = function () {
            assetMasterService.updateMasterData($scope.masterData._id, $scope.masterData, function (err, res) {
                $scope.mastersData.forEach(function (masterdata, index) {
                    if (masterdata._id == $scope.masterData._id) {
                        $scope.mastersData[index] = $scope.masterData;
                    }
                })
            })
            $("#basic-modal").modal('hide');
        }
        $scope.removeMasterData = function (index) {
            $scope.masterDatas.splice(index, 1);
        }
        $scope.askDeleteModal = function (index) {
            $("#askDeleteModal").modal({ backdrop: 'static', keyboard: false });
            $scope.deleteIndex = index;
        }
        $scope.deleteMasterDataSure = function (masterData) {
            assetMasterService.deleteMasterData($scope.deleteIndex, function (err, res) {
                console.log("success")
            })
            $scope.mastersData.splice($scope.deleteIndex, 1);
            $("#askDeleteModal").modal('hide');
        }
    }
})();
;



(function () {
    'use strict';
    var App = angular.module('app');

    App.service('assetMasterService', assetMasterService);
    assetMasterService.$inject = ["$http", "$rootScope"];
    function assetMasterService($http, $rootScope) {

        this.getAllAsset = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAllAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAssetById = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/readAssetById/:id'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.createAsset = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/createAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateAsset = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/updateAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteAsset = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/deleteAsset'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.getAllMasterData = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/getAllMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.createMasterData = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/createMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updateMasterData = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/updateMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteMasterData = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'assetMaster/deleteMasterData'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.getAllLicense = function (callback) {
            var responsePromise = $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/getAllLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

        this.createLicense = function (recordToInsert, callback) {
            var responsePromise = $http({
                method: 'POST',
                data: recordToInsert,
                headers: { 'Content-Type': 'application/json' },
                url: 'asset/createLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.updatelicense = function (id, recordToEdit, callback) {
            var responsePromise = $http({
                method: 'PUT',
                data: JSON.stringify({ id: id, recordToEdit: recordToEdit }),
                headers: { 'Content-Type': 'application/json' },
                url: 'license/updateLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }
        this.deleteLicense = function (id, callback) {
            var responsePromise = $http({
                method: 'DELETE',
                data: { id: id },
                headers: { 'Content-Type': 'application/json' },
                url: 'license/deleteLicense'
            });
            responsePromise.then(function (responseData) {
                callback(null, responseData.data);
            }, function (error) {
                callback(error, null);
            });
        }

    }
})();


(function () {
    'use strict';
    var App = angular.module('app');

    App.directive('windowHeight', function ($window) {
        return {
            link: function (scope, element, attrs) {
                angular.element(window).resize(function () {
                    scope.windowHeight();
                });
                setTimeout(function () {
                    scope.windowHeight();
                }, 10);
                scope.windowHeight = function () {
                    element.css('min-height', angular.element(window).height() -
                        (angular.element('#footer').height() + 17));

                }
            }
        }
    })

    // SlimScroll, for more examples you can check out http://rocha.la/jQuery-slimScroll
    // By adding the attribute (with custom values) 'data-js-slimscroll="{height: '100px', size: '3px', ...}'
    App.directive('jsSlimscroll', function () {
        return {
            link: function (scope, element, attrs) {
                var options = (typeof scope.$eval(attrs.jsSlimscroll) !== 'undefined') ? scope.$eval(attrs.jsSlimscroll) : new Object();

                jQuery(element).slimScroll({
                    height: options.height ? options.height : '200px',
                    size: options.size ? options.size : '5px',
                    position: options.position ? options.position : 'right',
                    color: options.color ? options.color : '#000',
                    alwaysVisible: options.alwaysVisible ? true : false,
                    railVisible: options.railVisible ? true : false,
                    railColor: options.railColor ? options.railColor : '#999',
                    railOpacity: options.railOpacity ? options.railOpacity : .3
                });
            }
        };
    });

    /* App.directive('scrollSpy', function ($timeout) {
         return {
             restrict: 'A',
             link: function (scope, elem, attr) {
                 var offset = parseInt(attr.scrollOffset, 10)
                 if (!offset) offset = 10;
                 console.log("offset:  " + offset);
                 elem.scrollspy({ "offset": offset });
                 scope.$watch(attr.scrollSpy, function (value) {
                     $timeout(function () {
                         elem.scrollspy('refresh', { "offset": offset })
                     }, 1);
                 }, true);
             }
         }
     });*/

    App.directive('preventDefault', function () {
        return function (scope, element, attrs) {
            jQuery(element).click(function (event) {
                event.preventDefault();
            });
        }
    });

    App.directive("scrollTo", ["$window", function ($window) {
        return {
            restrict: "AC",
            compile: function () {
                function scrollInto(elementId) {
                    if (!elementId) $window.scrollTo(0, 0);
                    //check if an element can be found with id attribute
                    var el = document.getElementById(elementId);
                    if (el) el.scrollIntoView();
                }

                return function (scope, element, attr) {
                    element.bind("click", function (event) {
                        scrollInto(attr.scrollTo);
                    });
                };
            }
        };
    }]);

    App.directive('uppercase', function () {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                var capitalize = function (inputValue) {
                    if (inputValue) {
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    }
                };
                modelCtrl.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]); // capitalize initial value
            }
        };
    });
    App.filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        }
    });
})();
