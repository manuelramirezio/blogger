angular.module('MyApp')
	.directive('myBanner' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			templateUrl : '/views/banner.client.view.html'
		}
	});