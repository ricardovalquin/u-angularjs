(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('NavBarController', NavBarController);

  /** @ngInject */
  function NavBarController($state, Auth) {
    var vm = this;
    vm.goToCategory = function(category) {
      $state.go('app.' + category);
    };

    vm.logout = function () {
      Auth.logOut();
      $state.go('login');
    }
  }
})();