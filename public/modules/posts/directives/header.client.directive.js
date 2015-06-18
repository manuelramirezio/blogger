angular.module('MyApp')
	.directive('myHeader' , function() {
		return {
			restrict 	: 'E',
			replace  	: true,
			templateUrl : '/views/header.client.view.html'
		}
	});