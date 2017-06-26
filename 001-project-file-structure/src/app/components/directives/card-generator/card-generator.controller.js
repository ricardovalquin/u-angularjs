(function () {
  'use strict';

  angular
    .module('angularEx1')
    .controller('cardController', cardController);

  /** @ngInject */
  function cardController() {
    var vm = this;

    vm.markAsFavorite = function () {
      var configObj = {
        icon: vm.icon,
        textColor: vm.textColor,
        backgroundColor: vm.backgroundColor,
        title: vm.title,
        descriptionText: vm.descriptionText
      };
      vm.favorite({obj: configObj});
    };
  }
})();
