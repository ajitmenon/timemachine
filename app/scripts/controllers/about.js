'use strict';

/**
 * @ngdoc function
 * @name timemachineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timemachineApp
 */
angular.module('timemachineApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
