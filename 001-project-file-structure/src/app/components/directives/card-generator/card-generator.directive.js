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
        descriptionText: '=',
        favorite: '&'

      },
      templateUrl: 'app/components/directives/card-generator/card-generator.html',
      link: function ($scope) {
        $scope.markAsFavorite = function() {
          var configObj = {
            icon: $scope.icon,
            textColor: $scope.textColor,
            backgroundColor: $scope.backgroundColor,
            title: $scope.title,
            descriptionText: $scope.descriptionText
          };
          $scope.favorite({obj: configObj});
        };

      }
    };
  }
})();