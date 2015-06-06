
controllers.controller('registerCtrl', function ($scope, $http, $location) {
  // write Ctrl here
  $scope.user = {};
  $scope.message = "Register";
  $scope.register = function(){
  	$http({
  	  method: 'POST',
  	  url: '/api/user/register',
  	  data: $scope.user
  	}).
  	success(function (data, status, headers, config) {
  	  console.log(data);
      $location.path('/tasks');
  	}).
  	error(function (data, status, headers, config) {
			console.log(data)
  	});
  }

})