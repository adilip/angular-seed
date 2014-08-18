'use strict';

/* Controllers */

var carcatControllers = angular.module('carcatControllers', []);

carcatControllers.controller('CarListCtrl', ['$scope', 'Car',
  function($scope, Car) {
    $scope.cars = Car.query();
    $scope.orderProp = 'company';
  }]);

carcatControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', 'Car',
  function($scope, $routeParams, Car) {
    $scope.car = Car.get({carId: $routeParams.carId}, function(car) {
      $scope.mainImageUrl = car.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);