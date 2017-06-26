(function () {
  'use strict';

  angular
    .module('angularEx1')
    .component('cardVisualizer', {
      templateUrl: 'app/components/directives/card-visualizer/card-visualizer.html',
      controller: 'cardVisualizerController',
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