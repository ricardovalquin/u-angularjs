(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(SITE_NAME) {
    var vm = this;

    vm.mainTitle = SITE_NAME;
    vm.textColor = '#00a7b5';
    vm.backgroundColor = '#ffffff';
    vm.titleText = '';
    vm.icon = null;
    vm.descriptionText = '';

    vm.colorOptions = {options: {
      label: "Choose a color",
      icon: "brush",
      default: "#000",
      genericPalette: false,
      history: false
    }};
  }
})();
