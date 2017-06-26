//(function () {
//  'use strict';
//
//  angular
//    .module('angularEx1')
//    .config(routeConfig);
//
//  function routeConfig($stateProvider) {
//    $stateProvider.state('app.home', {
//      url: '/home/',
//      views: {
//        'content@': {
//          templateUrl: 'app/states/home/home.html',
//          controller: 'HomeController',
//          controllerAs: 'homeCtrl'
//        }
//      },
//      resolve: {
//        /** @ngInject */
//        loggedUser: function ($state, Auth) {
//          var currentUser = Auth.currentUser();
//          if(currentUser && currentUser.email != undefined) {
//            return currentUser;
//          }
//          $state.go('login');
//        }
//      }
//    });
//  }
//
//})();
