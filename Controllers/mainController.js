(function () {
    "use strict";
    var mainController = function ($scope, SecretsService, AirTableService, StocksFactory) {    
        var Secret_Retrun = SecretsService.getKeys();
        Secret_Retrun.then(function(data){
            $scope.Secrets = data;
            $scope.AirTable_Secrets = $scope.Secrets.data.urls.AirTable;
            // console.log($scope.AirTable_Secrets);

            // Get my stocks from AirTable
            var myStocks_PromiseReturn = AirTableService.getMyStocks($scope.AirTable_Secrets);
            myStocks_PromiseReturn.then(function (data){
                $scope.myStocks = data;
                // console.log($scope.myStocks.data.records);
                $scope.myTickers = StocksFactory.getMyTickers($scope.myStocks.data.records);
                // console.log($scope.myTickers);
            })

            //Get current Trading info.
            var trading_PromiseReturn = StocksService.getThisStockInfo();
            trading_PromiseReturn.then(function (data){
                $scope.StockTradingInfo = data;
                console.log($scope.StockTradingInfo);
            })

        }).catch(function(){
           console.log('error loading secrets'); 
        });    
    };
    
    mainController.$inject = ['$scope', 'SecretsService', 'AirTableService', 'StocksFactory'];
    
    angular.module('appStockMarket')
        .controller('mainController', mainController);
}());