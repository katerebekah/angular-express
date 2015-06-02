'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/index', {
      templateUrl: 'partials/index',
      controller: 'indexCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'loginCtrl'
    }).
    when('/register', {
      templateUrl: 'partials/register',
      controller: 'registerCtrl'
    }).
    when('/tasks', {
      templateUrl: 'partials/taskList',
      controller: 'listCtrl'
    }).
    when('/add', {
      templateUrl: 'partials/addTask',
      controller: 'addCtrl'
    }).
    otherwise({
      redirectTo: '/index'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
