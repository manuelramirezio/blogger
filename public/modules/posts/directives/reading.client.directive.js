angular.module('MyApp')
	.directive('myReading' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			templateUrl : '/views/reading.client.view.html'
		}
	})