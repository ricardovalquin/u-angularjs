(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, SITE_NAME) {
    var vm = this;
    console.log('from the dashboard');

    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $log.debug('signUpToday clicked!');
    }

  }
})();
