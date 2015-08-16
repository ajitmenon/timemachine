'use strict';

/**
 * @ngdoc function
 * @name timemachineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timemachineApp
 */
angular.module('timemachineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
