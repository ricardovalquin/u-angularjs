(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $mdDialog, SITE_NAME, loggedUser, WeatherService) {
    var vm = this;
    var latlng = null;
    var coordinates = {
      lat: null,
      lon: null
    };

    vm.mainTitle = SITE_NAME;
    vm.user = loggedUser;
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

    var clickOnMap = $scope.$on('leafletDirectiveMap.map.click', function(event, args) {
      latlng = args.leafletEvent.latlng;
      console.log(latlng);
      vm.options.markers = {medellin:{lat: latlng.lat, lng: latlng.lng}};
      coordinates.lat = latlng.lat;
      coordinates.lon = latlng.lng;

      WeatherService.getWeather(coordinates).then(function (response){
        return response;

      });
    });




    var pollutionLatLon = {
      lat: 39.25,
      lon: 0.75
    };

    var radiationCoordinates = {
      location: coordinates.lat + ',' + coordinates.lon
    };

    var pollutionCoordinates = {
      location: pollutionLatLon.lat + ',' + pollutionLatLon.lon
    };



    //WeatherService.getRadiation(radiationCoordinates).then(function (response){
    //  return response;
    //});

    //WeatherService.getPollution(pollutionCoordinates).then(function (response){
    //  console.log(response);
    //  return response;
    //});
  }
})();
