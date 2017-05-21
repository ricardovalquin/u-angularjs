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
        'content@': {
          templateUrl: 'app/components/commons/content/content.html'
        },
        'footer@': {
          templateUrl: 'app/components/commons/footer/footer.html',
          controller: 'FooterController',
          controllerAs: 'footerCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/login');
  }
})();
