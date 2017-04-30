(function () {
    "use strict";   
    var StocksService = function ($http, $sce) {
        return{
            getThisStockInfo: function(thisPosition){
                var cacheData = {};
                if(!cacheData[thisPosition]) {
                    cacheData[thisPosition] = $http.get('http://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=6323&callback=JSON_CALLBACK', {
                        cache: true,
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }).then(function(response) {
                        // return response.data;
                        var XX = $sce.trustAsResourceUrl(response.data);
                        return XX;
                    });
                }
                return cacheData[thisPosition];
            }
        }
    };

    StocksService.$inject = ['$http', '$sce'];
    
    angular.module('appStockMarket')
	  .service('StocksService', StocksService);
    
}());