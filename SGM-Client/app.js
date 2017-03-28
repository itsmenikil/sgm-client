var EdumaatApp = {};

var app = angular.module('EdumaatApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/install', {
    templateUrl : 'install/index.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'view/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'view/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});
