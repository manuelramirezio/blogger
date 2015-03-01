angular.module('MyApp')
	.directive('hotPost' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			templateUrl : '/views/hot-post.client.view.html'

		}
	})