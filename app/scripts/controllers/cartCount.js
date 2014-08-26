'use strict';


angular.module('myYoApp')
    .controller('addCartCountCtrl', function ($scope) {

        $scope.cartCount = Util.localStorage.getStorageItem('cartCount');

        $scope.addCartCount = function(){

            if(!Util.localStorage.getStorageItem('cartCount')){

                Util.localStorage.setStorageItem('cartCount', 0);
            }

            $scope.cartCount = Util.localStorage.getStorageItem('cartCount') + 1;
            Util.localStorage.setStorageItem('cartCount', $scope.cartCount);

        };

    });
