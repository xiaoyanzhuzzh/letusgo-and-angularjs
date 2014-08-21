'use strict';


angular.module('myYoApp')
    .controller('addCartCountCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.addCartCount = function(){
            if(!localStorage.getItem('cartCount')){

                localStorage.setItem('cartCount',0);
            }

            localStorage.setItem('cartCount',parseInt(localStorage.getItem('cartCount')) + 1);

        };
        $scope.cartCount = $scope.addCartCount();

    });
