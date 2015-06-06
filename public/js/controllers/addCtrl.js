
controllers.controller('addCtrl', function ($scope, $location, apiService) {
  $scope.message = "Task List";
  //add task to list and redirect to the task list page
  $scope.addTask = function(){
    apiService.addTask($scope.item).then(function() {
        $location.path('/tasks')
    });
  }
   
});
