
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

    App.directive('uppercase', function() {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel',
            link : function(scope, element, attrs, modelCtrl) {
                var capitalize = function(inputValue) {
                    if(inputValue) {
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
