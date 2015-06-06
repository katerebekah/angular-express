
controllers.controller('registerCtrl', function ($scope, $location, apiService) {
  // write Ctrl here
  $scope.user = {};
  //register user and redirect to the log in page
  $scope.register = function(){
  	apiService.registerUser($scope.user)
  		.then(function(data){
  			$location.path('/login')},
  		function(errData){
        console.log(errData);
      });
  }

})