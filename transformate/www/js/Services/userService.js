angular.module('transformateOrt')
  .factory('userService', function userService($http) {

    return {
      all: function () {

        return $http.get('http://entrenate-ort.herokuapp.com/users');
      },
      create: function (user) {

        return $http.post('http://entrenate-ort.herokuapp.com/users/new', user);
      },
      performLogin: function (email, pass) {

        return $http.get('http://entrenate-ort.herokuapp.com/users/', {
          email: email,
          pass: pass
        });

      },
      findById: function (id) {

        return $http.get('http://entrenate-ort.herokuapp.com/users/' + id);
      },
      update: function (user) {

        return $http.put('http://entrenate-ort.herokuapp.com/users', user);
      }
    }
  });
