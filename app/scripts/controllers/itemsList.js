'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope) {

        $scope.items = loadAllItems();

        $scope.addToCart = function(index) {

           console.log(index);

            $scope.$parent.addCartCount();

            var item = function(index) {

                var items = JSON.parse(localStorage.getItem('item'));
                var item = items[index];

                return item;
                console.log(item);
            };

            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (!cartItems) {
                cartItems = [];
            }

            if(cartItems.length !== 0){
              for (var i = 0; i < cartItems.length; i++){

                  if (item.barcode === cartItems[i].item.barcode){

                      cartItems[i].number += 1;
                  }
                  else{
                      cartItems.push(new  CartItem(item,1));
                  }
              }
            }

            cartItems.push(new  CartItem(item,1));
            localStorage.setItem('cartItems',JSON.stringify(cartItems));
        };


    });
