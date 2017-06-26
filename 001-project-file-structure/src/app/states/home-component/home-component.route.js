(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('app.home', {
      url: '/home/',
      component: 'home',
      resolve: {
        /** @ngInject */
        loggedUser: function ($state, Auth) {
          var currentUser = Auth.currentUser();
          if(currentUser && currentUser.email != undefined) {
            return currentUser;
          }
          $state.go('login');
        }
      }
    });
  }

})();
