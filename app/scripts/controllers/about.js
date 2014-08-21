'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
