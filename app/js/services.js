'use strict';

/* Services */

var carcatServices = angular.module('carcatServices', ['ngResource']);

carcatServices.factory('Car', ['$resource',
  function($resource){
    return $resource('cars/:carId.json', {}, {
      query: {method:'GET', params:{carId:'cars'}, isArray:true}
    });
  }]);
