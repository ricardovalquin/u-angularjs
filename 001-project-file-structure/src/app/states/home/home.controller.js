(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(SITE_NAME, loggedUser) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.user = loggedUser;
    vm.active = 'home';

    vm.changeCategory = function (category) {
      $state.go('app.' + category);
    };
  }
})();
