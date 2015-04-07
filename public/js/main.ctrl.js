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
                url+='&_order='+order.direction.toLowerCase();
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


        // search
        vm.search = function(){
            vm.getPlayers(1);
        }

        // sort
        vm.orders = [
            {
                id: 1,
                title: 'Price: Ascendent',
                key: 'price',
                direction: 'ASC'
            },
            {
                id: 2,
                title: 'Price: Descendent',
                key: 'price',
                direction: 'DESC'
            },
            {
                id: 3,
                title: 'Age: Ascendent',
                key: 'age',
                direction: 'ASC'
            },
            {
                id: 4,
                title: 'Age: Descendent',
                key: 'age',
                direction: 'DESC'
            }
        ];

        vm.sort = function(e){
            var selected;
            var opt = e.target.getAttribute('opt');
            for(var i=0; i< vm.orders.length; i++){
                var item = vm.orders[i];
                if(item.id==opt){
                    selected = item;
                    break;
                }
            }

            if(selected){
                vm.order = selected;
                vm.getPlayers(vm.currentPage);
            }
        }

        // layout
        vm.layout = 'list';
        vm.switchLayout = function(){
            var tmp = vm.layout==='grid'?'list':'grid';
            vm.layout = tmp;
        }

        // check if player is start

        vm.isStar = function(player){
            return player.level=='Star' || player.level=='Superstar';
        }

    }

})();













