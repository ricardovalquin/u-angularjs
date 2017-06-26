(function () {
  'use strict';

  angular
    .module('angularEx1')
    .controller('cardVisualizerController', cardVisualizerController);

  /** @ngInject */
  function cardVisualizerController() {
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
