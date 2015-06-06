
controllers.controller('addCtrl', function ($scope, $http, $location) {
  $scope.message = "Task List";
  $scope.addTask = function(){

    $http({
      method: 'POST',
      url: '/api/tasks',
      data: $scope.item
    }).
    success(function (data, status, headers, config) {
      console.log(data);
    	  $location.path('/tasks');
    }).
    error(function (data, status, headers, config) {
      console.log(data);
    });

  } 
});
