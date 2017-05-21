(function () {
  'use strict';

  angular
    .module('angularEx1')
    .service('LoginService', LoginService);

  /** @ngInject */
  function LoginService($q, Auth) {

    return {
      login: login,
      logout: logout
    };

    function login(userData) {
      if (!userData.email || !userData.password) {
        return $q.reject('missing data');
      }

      if(Auth.logIn(userData)) {
        var data = {
          status: 200,
          user: userData,
          session: 123456789
        };
        return $q.resolve(data);
      } else {
        return $q.reject('login failed');
      }
    }

    function logout() {
      var data = {
        status: 200,
        user: {},
        session: null
      };
      return $q.resolve(data);
    }

  }

})();
