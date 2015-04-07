/**
 * main.ctrl.js
 */

;(function(){

    'use strict';

    angular
    .module('app')
    .controller('MainController', MainController);

    function MainController($http) {

        var vm = this;

        vm.title = 'Transfer Market';

        vm.players = [];

        // pagination
        vm.everyPage = 30;
        vm.currentPage = 1;
        vm.totalPlayer = 0;

        vm.loadPage = function(p){

            var ps = vm.everyPage;
            var start = (p-1)*ps;
            var end = start+ps;

            var url = 'http://ng-api.techpush.net/players';
                url+='?_start='+start;
                url+='&_end='+end;

            $http.get(url).success(function(data){
                console.log(data);
                if(!!data && !data.error){
                    var result = data.result;
                    vm.totalPlayer = result.totalItems;
                    vm.players = result.entries;
                    vm.currentPage = p;
                }
            });
        }

        vm.loadPage(1);
    }

})();
