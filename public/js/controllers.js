'use strict';

/* Controllers */

 var controllers = angular.module('myApp.controllers', []);
   controllers.controller('AppCtrl', function ($scope, $rootScope, $http, $location) {

        $http({
          method: 'GET',
          url: '/api/user',
        }).
        success(function (data, status, headers, config) {
          $rootScope.name = data.username;
        }).
        error(function (data, status, headers, config) {
        });
  
    $scope.logout = function(){
      $http({
        method: 'GET',
        url: '/api/user/logout',
      }).
      success(function (data, status, headers, config) {
        $rootScope.name = '';
        $location.path('/');
      }).
      error(function (data, status, headers, config) {
      });
    }
  })
