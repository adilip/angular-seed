'use strict';

/* Controllers */

var carcatApp = angular.module('carcatApp', []);

carcatApp.controller('CarListCtrl', function($scope, $http) {
  $http.get('cars/cars.json').success(function(data) {
    $scope.cars = data;
  });

  $scope.orderProp = 'company';
});