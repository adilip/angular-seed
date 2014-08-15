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

carcatControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('cars/' + $routeParams.carId + '.json').success(function(data) {
      $scope.car = data;
    });
  }]);