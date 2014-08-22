'use strict';

/**
 * @ngdoc overview
 * @name myYoApp
 * @description
 * # myYoApp
 *
 * Main module of the application.
 */
angular
  .module('myYoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/itemsList', {
        templateUrl: 'views/itemsList.html',
        controller: 'ItemsListCtrl'
      })
      .when('/cartItemsList', {
        templateUrl: 'views/cartItemsList.html',
        controller: 'CartItemsListCtrl'
      })

      .when('/cartPayList', {
        templateUrl: 'views/cartPayList.html',
        controller: 'CartPayListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });
