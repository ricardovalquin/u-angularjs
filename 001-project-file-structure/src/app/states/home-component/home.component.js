(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('home', {
      templateUrl: 'app/states/home-component/home-component.html',
      controller: 'HomeComponentController',
      controllerAs: 'homeCtrl'
    });
})();