/**
 * Created by jzamit on 29/05/16.
 */
'use strict';

angular.module('easyGetFit').controller('objectiveController', function objectiveController($scope, $http) {

  //atributes
  $scope.page = {};
  $scope.page.title = "Choose your objective";
  $scope.objectives = [{
    "_id":"1",
    "title":"Get Slim",
    "description":"Designed to loose fat really fast",
    "image":""
  },{"_id":"2",
    "title":"Get Fit",
    "description":"Going a bit further of loosing fat, and get your body in real shape",
    "image":""},{"_id":"3",
    "title":"Get Big",
    "description":"Well this is what many people is looking for, some Superb Phisique, come on and get it!",
    "image":""},{"_id":"4",
    "title":"Get Strong",
    "description":"Focused on lifting heavy weights, not muscle building, only power",
    "image":""}];


});








