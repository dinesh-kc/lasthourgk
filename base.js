var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'HomeController'
    })
    .when('/aarthik', {
      templateUrl: 'aarthik.html',
      controller: 'mcqController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);