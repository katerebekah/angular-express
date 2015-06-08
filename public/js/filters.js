'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  })/*.
  filter('date', function($filter)
  {
   return function(input)
   {
    if(input == null){ return ""; } 
   
    var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
   
    return _date.toUpperCase();

   };
  });*/
