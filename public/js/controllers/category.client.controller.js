angular.module('MyApp')
	.controller('categoryCtrl' , function($scope , activeNav , Category) {
		// change nav color
		$scope.active = activeNav.active;
		$scope.activate = function(ind) {
			activeNav.active = ind;
			$scope.active 	 = ind;
		}
		$scope.categories = [
			'main',
			'economic',
			'business',
			'society'
		];
		
		// get posts of this category

		var category = $scope.categories[activeNav.active];

		var query = Category.query({ category : category });

		query.$promise
			.then(function(value) {
				$scope.posts = value;
			},function(error) {
				console.log(error)
			});
		
	});