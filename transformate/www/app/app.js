// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('easyGetFit', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.training', {
        url: '/training',
        views: {
          'mainContent': {
            templateUrl: 'app/views/training/training.html'
          }
        }
      })

      .state('training.standard', {
        url: '/standard',
        views: {
          'mainContent': {
            templateUrl: 'app/views/training/training-standard.html'

          }
        }

      })

      /*
       ejemplo tabs abajo
       .state('training.standard', {
       url: '/standard',
       views: {
       "tab-standard" : {
       templateUrl: 'app/views/training/training-standard.html'
       }

       }
       */

      .state('training.custom', {
        url: '/custom',
        views: {
          'mainContent': {
            templateUrl: 'app/views/training/training-custom.html'

          }
        }
      })

      /*
       .state('home', {
       url: '/home',
       templateUrl: 'app/views/layout/menu-layout.html'

       })
       */
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'app/views/layout/menu-layout.html'

      })

      .state('app.home', {
        url: '/home',
        views: {
          'mainContent': {
            templateUrl: 'app/views/home/home.html'

          }
        }

      })

    ;

    $urlRouterProvider.otherwise("/app/home");

  });
