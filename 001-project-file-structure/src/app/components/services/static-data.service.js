(function () {
  'use strict';

  angular
    .module('angularEx1')
    .service('StaticDataService', staticDataService);

  /** @Inject*/
  function staticDataService($http) {

    var baseUrl = "/app/config/";

    return {
      getConfigFile: getConfigFile
    };

    function getConfigFile() {
      return $http.get(baseUrl + "/configuration.json");
    }
  }

})();
