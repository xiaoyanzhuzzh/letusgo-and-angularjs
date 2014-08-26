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

       $scope.cartItems = Util.localStorage.getStorageItem('cartItems');

       $scope.total = getTotal($scope.cartItems);

       $scope.totalNumber = getTotalNumber($scope.cartItems);

       $scope.changeCartItemcart = function(cartItem){

          changeCurrentCartItemNumber(cartItem, $scope.cartItems)
          $scope.total = getTotal($scope.cartItems);
          $scope.totalNumber = getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
       }

       $scope.addCartItemNumber = function(cartItem){
          addCurrentItemNumber(cartItem, $scope.cartItems);
          $scope.total = getTotal($scope.cartItems);
          $scope.totalNumber = getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
       };

      $scope.reduceCartItemNumber = function(cartItem){
           reduceCurrentItemNumber(cartItem, $scope.cartItems);
           $scope.total = getTotal($scope.cartItems);
           $scope.totalNumber = getTotalNumber($scope.cartItems);
           $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
      };

      $scope.deleteCartItem = function(cartItem){
          $scope.cartItems = deleteCurrentCartItem(cartItem, $scope.cartItems);
          $scope.total = getTotal($scope.cartItems);
          $scope.totalNumber = getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
      };

  });

  function addCurrentItemNumber(cartItem,countArray){
      if(!countArray){
           countArray= [];
       }

      for (var i = 0; i < countArray.length; i++){
          if(cartItem.item.name === countArray[i].item.name) {
               countArray[i].number += 1;

               Util.localStorage.setStorageItem('cartItems', countArray);
               Util.localStorage.setStorageItem('cartCount', getTotalNumber(countArray));
          }
      }
  }

 function reduceCurrentItemNumber(cartItem, countArray){
     if(!countArray){
       countArray= [];
     }

     for (var i = 0; i < countArray.length; i++){
         if(cartItem.item.name === countArray[i].item.name){
             if (countArray[i].number > 1){
                 countArray[i].number -= 1;

                 Util.localStorage.setStorageItem('cartItems', countArray);
                 Util.localStorage.setStorageItem('cartCount', getTotalNumber(countArray));
             }
             break;
         }
     }

 }

 function deleteCurrentCartItem(cartItem, countArray){
     if(!countArray){
         countArray= [];
     }

     for(var i = 0; i < countArray.length; i++){
         if( cartItem.item.name === countArray[i].item.name){
             countArray = _.without(countArray,countArray[i]);

             Util.localStorage.setStorageItem('cartItems', countArray);
             Util.localStorage.setStorageItem('cartCount', getTotalNumber(countArray));
         }
     }
     return countArray;
 }

 function changeCurrentCartItemNumber(cartItem, countArray){
   if(!countArray){
       countArray= [];
   }

   for(var i = 0; i < countArray.length; i++){
       if( cartItem.item.name === countArray[i].item.name){
           console.log(cartItem.number);
           countArray[i].number = parseInt(cartItem.number);
           
           Util.localStorage.setStorageItem('cartItems', countArray);
           Util.localStorage.setStorageItem('cartCount', getTotalNumber(countArray));
       }
   }

 }


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
