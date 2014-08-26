'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartPayListCtrl', function ($scope) {

    $scope.cartPayList = Util.localStorage.setStorageItem('cartItems');

    $scope.total = getTotal($scope.cartPayList);

    $scope.totalNumber = getTotalNumber($scope.cartPayList);
  });


  function getTotal(array){

    var total = 0;
    if(!array){
      array = [];
    }
    for(var i = 0; i < array.length; i++){
        total += array[i].number * array[i].item.price;
    }
    return total;
  }

  function getTotalNumber(array){

    var totalNumber = 0;
    var total = 0;
    if(!array){
      array = [];
    }
    for(var i = 0; i < array.length; i++){
        totalNumber += array[i].number;
    }
    return totalNumber;
  }
