(function () {
    "use strict";   
    var StocksService = function ($http) { 
        return {
            getThisStockInfo: function(thisPosition){
                var cacheData = {};
                if(!cacheData[thisPosition]) {
                    cacheData[thisPosition] = $http.get('https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?start_date=2017-03-15&collapse=weekly&column_index=4&order=asc&api_key=q27aNg7zfz9gRsWNJcAh&callback=JSON_CALLBACK', {                    
                        cache: true,
                        headers : {
                            'Content-Type' : 'application/json'                            
                        }
                    }).then(function(response) {
                        return response.data;
                    });
                }
                return cacheData[thisPosition];
            }
        };
    };
    
    StocksService.$inject = ['$http'];
    
    angular.module('appStockMarket')
	  .service('StocksService', StocksService);
    
}());