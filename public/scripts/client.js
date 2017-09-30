var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function ($routeProvider) {
    console.log('in myApp.config');

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'HC'
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalsController',
        controllerAs: 'RC'
    }).when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesController',
        controllerAs: 'SC'
    }).otherwise('/');
});