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
            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/modules/assets/dashboard.html',
                    controller: 'assetMasterCtrl'
                })
                .state('addAsset', {
                    url: '/addAsset',
                    templateUrl: 'app/modules/assets/addAsset.html',
                    controller: 'assetMasterCtrl',
                    resolve: {
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
                    }
                })
                .state('assetmodel', {
                    url: '/addAsset',
                    templateUrl: 'app/modules/assets/assetmodel.html',
                    controller: 'assetMasterCtrl'

                })
                .state('viewAsset', {
                    url: '/viewAsset',
                    templateUrl: 'app/modules/assets/viewAsset.html',
                    controller: 'assetMasterCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-assets',
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
                    }
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
                .state('editAsset', {
                    url: '/editAsset/:assetId',
                    templateUrl: 'app/modules/assets/editAsset.html',
                    controller: 'assetMaintainCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-assets',
                                serie: true,
                                files: [
                                    'bower_components/zingchart/client/zingchart.min.js',
                                    'bower_components/ZingChart-AngularJS/src/zingchart-angularjs.js',
                                ]
                            });
                        }]
                    }
                })
                .state('assetReport', {
                    url: '/assetReport',
                    templateUrl: 'app/modules/assets/assetReport.html',
                    controller: 'assetReportCtrl',
                    resolve: {
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
                    }

                })
                .state('assetInsurance', {
                    url: '/assetInsurance',
                    templateUrl: 'app/modules/masterData/insuranceForm.html',
                    controller: 'masterDataCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-assets',
                                serie: true,
                                files: [
                                    'bower_components/zingchart/client/zingchart.min.js',
                                    'bower_components/ZingChart-AngularJS/src/zingchart-angularjs.js',
                                ]
                            });
                        }]
                    }
                })
                .state('assetFunds', {
                    url: '/assetFunds',
                    templateUrl: 'app/modules/masterData/fundingList.html',
                    controller: 'masterDataCtrl',
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                insertBefore: '#css-assets',
                                serie: true,
                                files: [
                                    'bower_components/zingchart/client/zingchart.min.js',
                                    'bower_components/ZingChart-AngularJS/src/zingchart-angularjs.js',
                                ]
                            });
                        }]
                    }
                })
                .state('contracts', {
                    url: '/contracts',
                    templateUrl: 'app/modules/masterData/contracts.html',
                    controller: 'masterDataCtrl'
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
                    templateUrl: 'app/modules/masterData/institution.html',
                    controller: 'masterDataCtrl'
                })
                .state('manufacturer', {
                    url: '/manufacturer',
                    templateUrl: 'app/modules/masterData/manufacturer.html',
                    controller: 'masterDataCtrl'
                })
                .state('category', {
                    url: '/category',
                    templateUrl: 'app/modules/masterData/category.html',
                    controller: 'masterDataCtrl'
                })
                .state('model', {
                    url: '/model',
                    templateUrl: 'app/modules/masterData/model.html',
                    controller: 'masterDataCtrl'
                })
                .state('supplier', {
                    url: '/supplier',
                    templateUrl: 'app/modules/masterData/supplier.html',
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