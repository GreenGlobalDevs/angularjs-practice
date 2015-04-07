/**
 * main.ctrl.js
 */

;(function(){

    'use strict';

    angular
    .module('app')
    .controller('MainController', MainController);

    var toTop = function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }


    function MainController($scope, $http){

        var vm = this;
        var apiURL = 'http://ng-api.techpush.me/players';

        vm.title = 'Transfer Market';

        vm.players = [];

        // pagination
        vm.everyPage = 30;
        vm.totalPlayer = 0;
        vm.currentPage = 1;

        vm.getPlayers = function(p){

            var ps = vm.everyPage;
            var start = (p-1)*ps;
            var end = start+ps;

            var url = apiURL;
                url+='?_start='+start;
                url+='&_end='+end;

            var search = vm.searchInput;
            if(search){
                url+='&_key=name&_search='+search;
            }

            var order = vm.order;
            if(order){
                url+='&_sort='+order.key;
                url+='&_order='+(order.reverse===true?'DESC':'ASC');
            }

            $http.get(url).success(function(data){
                if(!!data && !data.error){
                    var result = data.result;
                    vm.totalPlayer = result.totalItems;

                    var players = result.entries;
                    if(angular.isArray(players)){
                        players.forEach(function(ob){
                            ob.price = accounting.formatMoney(ob.price);
                        });
                        vm.players = players;
                        vm.currentPage = p;
                        toTop();
                    }
                }
            });
        }

        vm.getPlayers(1);



    }

})();
