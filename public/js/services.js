'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    .service('apiService', function($http, $rootScope) {
        //find current user and set the rootScope name value
        this.getCurrentUser = function() {
            return $http({
                method: 'GET',
                url: '/api/user',
            }).
            success(function(data, status, headers, config) {
                $rootScope.name = data.username;
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        }
        //get all tasks associated with a user
        this.getUserTasks = function() {
            return $http({
                method: 'GET',
                url: '/api/tasks'
            }).
            success(function(data, status, headers, config) {
                for (var i = 0; i < data.length; i++){
                    data[i].due_date = new Date(data[i].due_date).toISOString().slice(0, 10);
                }
                return data.reverse();
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        };
        //get specific task by id - not currently being used!!!
        this.getUserTask = function(id) {
            return $http({
                method: 'GET',
                url: '/api/tasks/' + id
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        };
        //Add a task to a user's list 
        this.addUserTask = function(item) {
            return $http({
                method: 'POST',
                url: '/api/tasks',
                data: item
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        };
        //delete a task from a User's list
        this.deleteUserTask = function(id) {
            return $http({
                method: 'DELETE',
                url: '/api/tasks/' + id
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        }
        //register a new user
        this.registerUser = function(user) {
            return $http({
                method: 'POST',
                url: '/api/user/register',
                data: user
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        };
        //log in user and set rootScope name to username
        this.loginUser = function(user) {
            return $http({
                method: 'POST',
                url: '/api/user/login',
                data: user
            }).
            success(function(data, status, headers, config) {
                $rootScope.name = data.username;
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        };
        //logs user out of the application and removes name from rootscope
        this.logoutUser = function() {
            return $http({
                method: 'GET',
                url: '/api/user/logout',
            }).
            success(function(data, status, headers, config) {
                $rootScope.name = '';
                return data;
            }).
            error(function(data, status, headers, config) {
                return data;
            });
        }

    });
