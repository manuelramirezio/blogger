angular.module('MyApp')
	.directive('catPost' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			templateUrl : '/views/cat-post.client.view.html'
		}
	})