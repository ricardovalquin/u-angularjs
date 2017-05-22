(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(SITE_NAME, Auth) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.user = Auth.currentUser();
    vm.active = 'detail';

    vm.changeCategory = function (category) {
      $state.go('app.' + category);
    };
  }
})();
