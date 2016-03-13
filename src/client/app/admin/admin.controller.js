(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    /* @ngInject */
    function AdminController() {
        var vm = this;

        vm.title = 'Admin';

        activate();

        function activate() {
            console.log('Activated Admin View');
        }
    }
})();
