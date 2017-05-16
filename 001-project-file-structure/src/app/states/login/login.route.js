(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'app/states/login/login.html',
          controller: 'LoginController',
          controllerAs: 'loginCtrl'
        }
      }
    });
  }

})();
