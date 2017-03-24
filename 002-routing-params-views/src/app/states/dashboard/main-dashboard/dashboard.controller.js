(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams, $state) {
        var vm = this;
        vm.currentUser = $stateParams.currentUser;
        vm.goToDetail = goToDetailMethod();

        function goToDetailMethod() {
            $state.go('detail');
        }
    }
})();
