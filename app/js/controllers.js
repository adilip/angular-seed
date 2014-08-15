'use strict';

/* Controllers */

var carcatControllers = angular.module('carcatControllers', []);

carcatControllers.controller('CarListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('cars/cars.json').success(function(data) {
      $scope.cars = data;
    });

    $scope.orderProp = 'company';
  }]);

carcatControllers.controller('CarDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.carId = $routeParams.carId;
  }]);
