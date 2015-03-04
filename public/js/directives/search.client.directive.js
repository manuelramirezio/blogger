angular.module('MyApp')
	.directive('mySearch' , function() {
		return {
			restrict	: 'E',
			replace 	: true,
			templateUrl : '/views/search.client.view.html'
		}
	});