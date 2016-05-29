angular.module('starter', ['ionic']).controller('pruebaController', function($scope, $http) {
  $scope.usuarios = [];
  $scope.funciona = "Anda";


  $http.get('http://entrenate-ort.herokuapp.com/users')
    .then(function (response) {
      $scope.myWelcome = response.data;
    });
});
