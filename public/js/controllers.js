'use strict';

/* Controllers */

 var controllers = angular.module('myApp.controllers', []);
   controllers.controller('AppCtrl', function ($scope, $location, apiService) {
    
    //get user name for rootscope on page load/reload
    $scope.getUser = function(){
        apiService.getCurrentUser()
    };
    $scope.getUser();
        
    //log out user, reset rootScope name, and redirect to index
    $scope.logout = function(){
      apiService.logoutUser().then(function(data){
        $location.path('/');
      })
    }
  });
