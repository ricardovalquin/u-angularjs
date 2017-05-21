(function () {
  'use strict';

  angular
    .module('angularEx1')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('app.detail', {
      url: '/detail',
      views: {
        'content@': {
          templateUrl: 'app/states/detail/detail.html',
          controller: 'DetailController',
          controllerAs: 'detailCtrl'
        }
      }//,
      //resolve: {
      //  /** @ngInject */
      //  loggedUser: function ($state, Auth) {
      //    var currentUser = Auth.currentUser();
      //    if(currentUser && currentUser.email != undefined) {
      //      return currentUser;
      //    }
      //    $state.go('login');
      //  }
      //}
    });
  }

})();
