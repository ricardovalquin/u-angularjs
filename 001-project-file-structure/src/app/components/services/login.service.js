(function () {
  'use strict';

  angular
    .module('angularEx1')
    .service('LoginService', LoginService);

  /** @ngInject */
  function LoginService($q) {

    return {
      login: login,
      logout: logout
    };

    function login(userData) {
      if (!userData.email || !userData.password) {
        return $q.reject('missing data');
      }
      var data = {
        status: 200,
        user: userData,
        session: 123456789
      };
      return $q.resolve(data);
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
