(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(SITE_NAME) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
  }
})();
