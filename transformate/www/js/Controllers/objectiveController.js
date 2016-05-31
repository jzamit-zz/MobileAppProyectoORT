/**
 * Created by jzamit on 29/05/16.
 */
'use strict';

angular.module('transformateOrt').controller('objectiveController', function objectiveController($scope, $http) {

  //atributes
  $scope.page = {};
  $scope.page.title = "Choose you objective";
  $scope.usuarios = [];
  $scope.funciona = "Anda";
  $http.get('http://entrenate-ort.herokuapp.com/users')
    .then(function (response) {
      $scope.usuarios = response.data;
    });
});








