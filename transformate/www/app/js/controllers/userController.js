/**
 * Created by jzamit on 29/05/16.
 */
'use strict';

angular.module('easyGetFit').controller('userController', function userController($scope, userService) {

  //atributes
  $scope.page = {};
  $scope.page.title = "Choose you objective";
  $scope.usuarios = [];
  //$scope.title = "Anda";


  $scope.getUsers = function () {

    $scope.usuarios = userService.all().then(function (result) {

      $scope.usuarios = result.data;
      console.log($scope.usuarios);

    });

  };
});
