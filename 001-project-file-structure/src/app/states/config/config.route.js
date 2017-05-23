(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('app.config', {
      url: '/config',
      views: {
        'content@': {
          templateUrl: 'app/states/config/config.html',
          controller: 'ConfigController',
          controllerAs: 'configCtrl'
        }
      },
      resolve: {
        /** @ngInject */
        configData: function (StaticDataService) {
          return StaticDataService.getConfigFile();
        }
      }
    });
  }

})();
