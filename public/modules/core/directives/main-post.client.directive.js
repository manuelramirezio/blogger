angular.module('MyApp')
	.directive('mainPost' , function() {
		return {
			restrict	: 'E',
			replace 	: true,
			templateUrl : '/views/main-post.client.view.html'
		}
	});