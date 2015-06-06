controllers.controller('listCtrl', function($scope, $http, $rootScope, $location) {
    // write Ctrl here
    $scope.message = "Task List";
    $scope.getList = function() {
        $http({
            method: 'GET',
            url: '/api/tasks'
        }).
        success(function(data, status, headers, config) {
            $scope.tasks = data.reverse();
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });
    };
    $scope.getList();
    $scope.priorityClass = function(priority) {
        switch (priority) {
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
        };
    };

    $scope.enableEdit = function(itemID) {
        $scope.editID = itemID;
    };

    $scope.cancelEdit = function(item) {
        $scope.editID = false;
    };
    $scope.submitEdit = function(item, itemID) {
        $scope.delete(itemID);
        $http({
            method: 'POST',
            url: '/api/tasks',
            data: item
        }).
        success(function(data, status, headers, config) {
            $scope.editItem = false;
            $scope.getList();
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });
    };

    $scope.delete = function(itemid) {
        console.log(itemid);
        $http({
            method: 'DELETE',
            url: '/api/tasks/' + itemid
        }).
        success(function(data, status, headers, config) {
            $scope.getList();
        }).
        error(function(data, status, headers, config) {
            console.log(data);
        });
    };

});
