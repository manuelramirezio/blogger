angular.module('MyApp')
	.controller('categoryCtrl' , function($scope , activeNav , Category , $localStorage) {

		// change nav color
		$scope.active 	  = 
			activeNav.getStorage() == undefined ? activeNav.active : activeNav.getStorage();

		$scope.categories = activeNav.categories.all;

		$scope.activate = function(ind) {
			activeNav.active = ind;
			$scope.active 	 = ind;
			console.log(ind)
			activeNav.setStorage(ind);
		}
		
		// get posts of this category

		var category = $scope.categories[activeNav.active];

		var query = Category.query({ category : category });

		query.$promise
			.then(function(value) {
				$scope.posts = value;
			},function(error) {
				console.log(error)
			});

		// go to post reading state
		$scope.readPost = function(post) {
			console.log(post._id)
		}
		
	});