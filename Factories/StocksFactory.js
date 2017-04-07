(function () {
    "use strict";
    var StocksFactory = function () {
        
        var factory = {};

        factory.getMyTickers = function (mystocks) {
            //Getting just the tickets into an array
            var tickers_arr = [],
                stock_cnt = mystocks.length;
            
            for(var i=0; i<stock_cnt; i++){
                tickers_arr.push(mystocks[i].fields.Ticker)
            }
            return tickers_arr;
        }
        return factory;
    };  
    
    StocksFactory.$inject = [];
    
    angular.module('appStockMarket')
        .factory('StocksFactory', StocksFactory);
    
}());