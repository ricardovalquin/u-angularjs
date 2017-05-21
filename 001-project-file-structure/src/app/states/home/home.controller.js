(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, SITE_NAME, loggedUser) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.user = loggedUser;
    console.log(vm.user);
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $log.debug('signUpToday clicked!');
    }

  }
})();
