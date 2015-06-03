
controllers.controller('listCtrl', function ($scope) {
  // write Ctrl here
  $scope.message = "Task List";
  $scope.tasks = [
    {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 1, completed: false},
    {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 2, completed: false},
    {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 4, completed: false},
    {title: "hello", description: "LOL", due_date: "1/22/2016", priority: 3, completed: false}
  ];
  $scope.priorityClass = function (priority){
    switch(priority){
      case 1:
        return 'panel-primary';
      case 2:
        return 'panel-success';
      case 3:
        return 'panel-warning';
      case 4:
        return 'panel-danger';
      default:
        return '';
    }
  }
})