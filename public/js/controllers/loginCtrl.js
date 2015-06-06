
controllers.controller('loginCtrl', function ($scope, $http, $location, $rootScope) {
  // write Ctrl here
    $scope.user = {};
    $scope.message = "Log In";
    $scope.login = function(){
    	$http({
    	  method: 'POST',
    	  url: '/api/user/login',
    	  data: $scope.user
    	}).
    	success(function (data, status, headers, config) {
    	  $rootScope.name = data.username;
    	  $location.path('/tasks')
    	}).
    	error(function (data, status, headers, config) {
  			console.log(data)
    	});
    };
})