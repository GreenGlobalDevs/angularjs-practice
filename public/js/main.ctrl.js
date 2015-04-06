/**
 * main.ctrl.js
 */

;(function(){

    angular
    .module('app')
    .controller('MainController', MainController);

    function MainController($http) {

        var vm = this;

        vm.title = 'Transfer Market';

        vm.players = [];

        $http.get('https://ng-api-ndaidong.c9.io/').success(function(data){
            console.log(data);
            vm.players = data.result.entries;
        });
    }

})();
