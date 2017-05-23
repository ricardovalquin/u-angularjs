(function() {
  'use strict';

  angular
    .module('angularEx1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      abstract: true,
      views: {
        'navbar@': {
          templateUrl: 'app/components/commons/nav/navbar.html',
          controller: 'NavBarController',
          controllerAs: 'navCtrl'
        },
        'content@': {
          templateUrl: 'app/components/commons/content/content.html'
        }
      }
    });

    $urlRouterProvider.otherwise('/login');
  }
})();
