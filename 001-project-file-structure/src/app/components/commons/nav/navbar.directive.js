(function() {
  'use strict';

  angular
    .module('angularEx1')
    .directive('navBar', navBarDirective);

  /** @ngInject */
  function navBarDirective() {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'app/components/commons/nav/navbar.html',
      controller: 'NavBarController',
      controllerAs: 'navCtrl'
    }
  }
})();