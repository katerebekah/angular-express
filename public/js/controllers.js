'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

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

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('loginCtrl', function ($scope) {
    // write Ctrl here
    $scope.message = "Login";
  }).
  controller('registerCtrl', function ($scope) {
    // write Ctrl here
    $scope.message = "Register";

  }).
  controller('listCtrl', function ($scope) {
    // write Ctrl here
    $scope.message = "Task List";
    $scope.tasks = [
      {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 1, completed: false},
      {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 2, completed: false},
      {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 4, completed: false},
      {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 3, completed: false}
    ];
    
  }).
  controller('addCtrl', function ($scope) {
    // write Ctrl here
    $scope.message = "Add a Task";

  });
