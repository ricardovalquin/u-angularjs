(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('app.detail', {
      url: '/detail',
      component: 'generator'
    });
  }

})();
