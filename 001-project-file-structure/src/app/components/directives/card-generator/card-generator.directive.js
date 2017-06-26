(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('cardGenerator', {
      templateUrl: 'app/components/directives/card-generator/card-generator.html',
      controller: 'cardController',
      controllerAs: 'cardCtrl',
      bindings: {
        icon: '=',
        textColor: '=',
        backgroundColor: '=',
        title: '=',
        descriptionText: '=',
        favorite: '&'
      }
    });
})();