(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('ConfigController', ConfigController);

  /** @ngInject */
  function ConfigController($state, SITE_NAME, Auth, configData) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.user = Auth.currentUser();
    vm.active = 'config';
    vm.configData = configData.data;

    vm.changeCategory = function (category) {
      $state.go('app.' + category);
    };
  }
})();
