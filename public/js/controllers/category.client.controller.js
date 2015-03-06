angular.module('MyApp')
	.controller('categoryCtrl' , function($scope , activeNav , Category) {
		// change nav color
		$scope.activate = function(ind) {
			activeNav.active = ind;
		}
		$scope.categories = [
			'main',
			'economic',
			'business',
			'society'
		];
		$scope.posts = [1,2,3,4,5];

		// get posts of this category
		var query = Category.query({ category:'economic' });

		query.$promise
			.then(function(value) {
				console.log(value);
			},function(error) {
				console.log(error)
			});

	});