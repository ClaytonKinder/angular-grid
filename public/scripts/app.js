var app = angular.module('angular-local', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
  $mdThemingProvider.theme()
    .primaryPalette('blue');

  $stateProvider
    .state('grid', {
      url: "/grid",
      templateUrl: "/views/grid.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "/views/about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "/views/contact.html"
    })
    // $urlRouterProvider.otherwise('/404');
})
