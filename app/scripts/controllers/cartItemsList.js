'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartItemsListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.cartItems = JSON.parse(localStorage.getItem('cartItems'));
  

   $scope.total = getTotal($scope.cartItems);

   $scope.totalNumber = getTotalNumber($scope.cartItems);
  });


  function getTotal(array){

      var total = 0;
      for(var i = 0; i < array.length; i++){
          total += array[i].number * array[i].item.price;
      }
      return total;
  }

  function getTotalNumber(array){

      var totalNumber = 0;
      for(var i = 0; i < array.length; i++){
          totalNumber += array[i].number;
      }
      return totalNumber;
  }
