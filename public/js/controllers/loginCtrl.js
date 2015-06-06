
controllers.controller('loginCtrl', function ($scope, $location, apiService) {
  // write Ctrl here
    $scope.user = {};
    //login in user, set rootscope name, and redirect to tasks page
    $scope.login = function(){
        apiService.loginUser($scope.user).then(function(data){
        	$location.path('/tasks')
        }, function(errData){
        		console.log(errData);
      	});
    }

})