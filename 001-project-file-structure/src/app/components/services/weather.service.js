(function () {
  'use strict';

  angular
    .module('angularEx1')
    .service('WeatherService', WeatherService);

  /** @ngInject */
  function WeatherService($q, $http, WEATHER_HOST, WEATHER_API_KEY) {

    var baseUrl = WEATHER_HOST;
    var apiKey = WEATHER_API_KEY;
    var weatherResource = 'data/2.5/weather';
    var radiationResource = 'v3/uvi/';
    var pollutionResource = 'pollution/v1/co';

    return {
      getWeather: getWeather,
      getRadiation: getRadiation,
      getPollution: getPollution
    };

    function getWeather(coordinates) {
      if(!coordinates.lat || !coordinates.lon) {
        return $q.reject('Location coordinates are required');
      }
      var params = {
        lat: coordinates.lat,
        lon: coordinates.lon,
        APPID: apiKey
      };
      return $http.get(baseUrl + weatherResource, {params: params}).then(function (response) {
        return response.data;// .main and .weather
      });
    }

    function getRadiation(coordinates) {
      if(!coordinates.location) {
        return $q.reject('Location coordinates are required');
      }
      var params = {
        APPID: apiKey
      };
      return $http.get(baseUrl + radiationResource + '/' + coordinates.location + '/'  + 'current.json',
        {params: params}).then(function (response) {
        return response.data;// .data is the value
      });
    }

    function getPollution(coordinates) {
      if(!coordinates.location) {
        return $q.reject('Location coordinates are required');
      }
      var params = {
        APPID: apiKey
      };
      return $http.get(baseUrl + pollutionResource + '/' + coordinates.location + '/' + 'current.json',
        {params: params}).then(function (response) {
        return response.data;// .data is the value
      });
    }
  }

})();
