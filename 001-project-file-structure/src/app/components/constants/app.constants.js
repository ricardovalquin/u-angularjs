(function() {
  'use strict';

  angular
    .module('angularEx1')
    .constant('SITE_NAME', 'Talos University')
    .constant('WEATHER_API_KEY', '534eccb946ce639dbb41f82b8be15dcc')
    .constant('WEATHER_HOST', 'http://api.openweathermap.org/');
})();
