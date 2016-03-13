(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController($rootScope, $timeout, config) {
        var vm = this;

        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle
        };

        activate();

        function activate() {
            console.log(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 2 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 2000);
        }
    }
})();
