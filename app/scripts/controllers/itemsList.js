'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope) {

        $scope.items = loadAllItems();


        $scope.addToCart = function(item) {

          $scope.$parent.addCartCount();

          var cartItems = JSON.parse(localStorage.getItem('cartItems'));
              if (cartItems === 0) {
                  cartItems = [];
              }

              var cartItem = isExistInCart(item.barcode, cartItems);
              if (cartItem) {
                  cartItem.number += 1;
              }
              else{
                  cartItems.push(new  CartItem(getCartItems(item.barcode),1));
              }

              localStorage.setItem('cartItems',JSON.stringify(cartItems));
              console.log(localStorage.getItem('cartItems'));
          };

    });



    function getCartItems(id){

        var item;
        var items = JSON.parse(localStorage.getItem('item'));
        for (var i = 0; i < items.length; i++) {
            if(id === items[i].barcode){
                item = items[i];
            }
        }
        return item;
    }

    function isExistInCart(barcode, cartItems){

        var item;
        for (var i = 0; i < cartItems.length; i++){

            if (barcode === cartItems[i].item.barcode){
                item = cartItems[i];
            }
        }
        return item;
    }
