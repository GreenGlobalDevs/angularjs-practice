
;(function(){

    'use strict';

    angular.module('app').controller('MainController', MainController);

    function MainController(){
        var vm = this;

        vm.title = 'AngularJS Tutorial';

        vm.steps = [
            {
                title: 'Step 1',
                description: 'Setup a new app',
                link: 'step1',
                passed: false
            },
            {
                title: 'Step 2',
                description: 'Template, Listing with ng-repeat',
                link: 'step2',
                passed: false
            },
            {
                title: 'Step 3',
                description: 'Form, Filter, Sorting',
                link: 'step3',
                passed: false
            },
            {
                title: 'Step 4',
                description: 'UI Bootstrap, style by condition',
                link: 'step4',
                passed: false
            },
            {
                title: 'Step 5',
                description: 'Dynamic layout - View mode, $http & external data',
                link: 'step5',
                passed: false
            },
            {
                title: 'Step 6',
                description: 'Simple pagination, RESTful Players API',
                link: 'step6',
                passed: false
            },
            {
                title: 'Step 7',
                description: 'Advanced pagination/sorting via server-side',
                link: 'step7',
                passed: false
            },
            {
                title: 'Step 8',
                description: 'External templates, AngularUI Router, EventEmiter',
                link: 'step8',
                passed: false
            }
        ];
    }

})();
