(function () {
  'use strict';

  angular.module('angularEx1')
    .controller('LoginController', LoginController);

  /** @Inject*/
  function LoginController($state, $log, LoginService) {
    var vm = this;
    vm.formData = {};
    vm.loginForm = {};

    vm.submitForm = function () {
      LoginService.login(vm.formData).then(function () {
        $state.go('app.home');
      }, function (error) {
        $log.error('something went wrong: ' + error);
      });
    };
  }

})();
