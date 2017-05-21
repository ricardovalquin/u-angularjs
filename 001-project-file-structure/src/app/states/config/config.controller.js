(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('ConfigController', ConfigController);

  /** @ngInject */
  function ConfigController(SITE_NAME) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
  }
})();
