(function () {
    "use strict";
    var appStockMarket = angular.module('appStockMarket', ['ngRoute']);
    
    appStockMarket.config(['$routeProvider', function($routeProvider){
		$routeProvider
            .when('/', {
                templateUrl: 'Views/home.html'
            })
            .otherwise({redirectTo: '/'});
	}]);
}());