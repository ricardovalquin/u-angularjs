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
      scope: {
        activeLink: '=',
        user: '=',
        clickLink: '&'
      },
      templateUrl: 'app/components/commons/nav/navbar.html',
      controller: 'NavBarController',
      controllerAs: 'navCtrl',
      link: function(scope) {
        scope.goToCategory = function(link) {
          scope.clickLink(link);
        };
      }
    }
  }
})();