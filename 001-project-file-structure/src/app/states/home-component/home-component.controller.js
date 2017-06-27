(function () {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeComponentController', HomeComponentController);

  /** @ngInject */
  function HomeComponentController($scope, $mdDialog, SITE_NAME, WeatherService) {
    var vm = this;
    var latlng = null;
    var coordinates = {
      lat: null,
      lon: null
    };

    vm.mainTitle = SITE_NAME;
    vm.weatherVariable = 0;
    vm.options = {
      center: {
        lat: 4.740675384778373,
        lng: -74.761962890625,
        zoom: 6
      },
      defaults: {
        scrollWheelZoom: false
      },
      events: {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      }
    };

    function showData(info) {
      alert = $mdDialog.alert({
        title: info.variable,
        textContent: info.description,
        ok: 'Close'
      });

      $mdDialog
        .show(alert)
        .finally(function () {
          alert = undefined;
        });
    }

    var clickOnMap = $scope.$on('leafletDirectiveMap.map.click', function (event, args) {
      latlng = args.leafletEvent.latlng;
      vm.weatherVariable = parseInt(vm.weatherVariable);
      vm.options.markers = {medellin: {lat: latlng.lat, lng: latlng.lng}};
      coordinates.lat = latlng.lat;
      coordinates.lon = latlng.lng;

      switch (vm.weatherVariable) {
        case 0:
          WeatherService.getWeather(coordinates).then(function (response) {
            var info = {
              variable: 'weather',
              description: 'This is the weather for: ' + response.name + ' and today we are going to have: ' + response.weather[0].description
            };
            showData(info);
          });
          break;
        case 1:
          coordinates.lat = parseInt(latlng.lat) + 0.25;
          coordinates.lon = parseInt(latlng.lng) + 0.25;
          var radiationCoordinates = {
            location: coordinates.lat + ',' + coordinates.lon
          };
          WeatherService.getRadiation(radiationCoordinates).then(function (response) {
            var info = {
              variable: 'Radiation',
              description: 'This is the radiation level for the coordinates: ' + latlng.lat + ', ' + latlng.lng + ' and the data is: ' + response.data
            };
            showData(info);
          });
          break;
      }
    });


    $scope.$on('$destroy', function () {
      clickOnMap();
    });
  }
})();
