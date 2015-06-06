controllers.controller('listCtrl', function($scope, $location, apiService) {
    // write Ctrl here

    //Get List on Page Load
    $scope.getList = function() {
        apiService.getUserTasks().then(function(response) {
            $scope.tasks = response.data;
        });
    };
    $scope.getList();

    //set classes by priority level
    $scope.priorityClass = function(priority) {
        switch (priority) {
            case 1:
                return 'panel-blue';
            case 2:
                return 'panel-green';
            case 3:
                return 'panel-orange';
            case 4:
                return 'panel-red';
            default:
                return '';
        };
    };
    //make task editable (reveal form)
    $scope.enableEdit = function(itemID) {
        $scope.editID = itemID;
    };
    //cancel edit view
    $scope.cancelEdit = function(item) {
        $scope.editID = false;
    };
    //POST edit (remove current version, add new version) and update list
    $scope.submitEdit = function(item, itemID) {
        apiService.deleteUserTask(itemID);
        apiService.addUserTask(item).then(function(data) {
            $scope.getList();
        });
    };
    //delete Task and update list
    $scope.delete = function(itemid) {
        apiService.deleteUserTask(itemid).then(function(data) {
            $scope.getList();
        });
    };
    //add Task to list and update list
    $scope.add = function() {
        apiService.addUserTask($scope.item).then(function(data) {
            $scope.getList();
        });
        //reset item in page view so form becomes empty
        $scope.item = {};
    };

});
