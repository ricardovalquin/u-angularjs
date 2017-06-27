(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('generator', {
      templateUrl: 'app/states/card-generator-component/card-generator.component.html',
      controller: 'GeneratorController',
      controllerAs: 'generatorCtrl'
    });
})();