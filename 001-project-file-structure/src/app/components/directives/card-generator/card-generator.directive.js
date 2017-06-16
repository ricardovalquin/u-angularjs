(function() {
  'use strict';

  angular
    .module('angularEx1')
    .directive('cardGenerator', cardGenerator);

  /** @ngInject */
  function cardGenerator() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        icon: '=',
        textColor: '=',
        backgroundColor:'=',
        title: '=',
        descriptionText: '='
      },
      templateUrl: 'app/components/directives/card-generator/card-generator.html',
      controller: CardGeneratorController,
      controllerAs: 'cardGenCtrl',
      link: function ($scope) {
        var card = angular.element(document.querySelector('.preview'));
        card.css('background-color', $scope.backgroundColor);
        card.css('color', $scope.textColor);

      }
    };
    /** @ngInject */
    function CardGeneratorController($scope) {}
  }
})();