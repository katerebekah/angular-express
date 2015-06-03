'use strict';

/* Controllers */

 var controllers = angular.module('myApp.controllers', []);
  controllers.controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  })
  controllers.controller('addCtrl', function ($scope) {
    // write Ctrl here
    $scope.message = "Add a Task";

  });
