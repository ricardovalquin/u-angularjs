(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('NavBarController', NavBarController);

  /** @ngInject */
  function NavBarController($state, Auth) {
    var vm = this;
    vm.activeLink = $state.current.name;
    vm.user = Auth.currentUser();
    vm.goToCategory = function(category) {
      vm.activeLink = 'app.' + category;
      $state.go('app.' + category);
    };

    vm.logout = function () {
      Auth.logOut();
      $state.go('login');
    }
  }
})();