'use strict';


angular.module('myYoApp')
    .controller('addCartCountCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.cartCount = localStorage.getItem('cartCount');
        $scope.addCartCount = function(){

            if(!localStorage.getItem('cartCount')){

                localStorage.setItem('cartCount',0);
            }

            $scope.cartCount = parseInt(localStorage.getItem('cartCount')) + 1;
            localStorage.setItem('cartCount', $scope.cartCount);

        };

    });
