angular.module('OWMApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        }).when('/cities/:city', {
            templateUrl: 'city.html',
            controller: 'CityCtrl',
            resolve: {
                city: function(owmCities, $route, $location) {
                    if (owmCities.indexOf($route.current.params.city) == -1) {
                        $location.path('/error');
                        return;
                    }

                    return $route.current.params.city;
                }
            }

        }).when('/error', {
            template: '<p>Error - Page Not Found</p>'
        }).otherwise('/error');

    }])
    .value("owmCities", ['New York', 'Dallas', 'Chicago'])
    .value("blah", "this is a test")
    .controller('HomeCtrl', function($scope) {

    })
    .controller('CityCtrl', function($scope, city) {

        $scope.city = city
    });

