angular.module('MyApp')
	.controller('categoryCtrl' , function($scope , $stateParams , activeNav , Category) {


		$scope.activate = function(ind) {
			$scope.active 	 = ind;
			activeNav.active = ind;
		}
		
		// get posts of this category

		$scope.category  = $stateParams.category;
		$scope.page 	 = $stateParams.page;
		activeNav.active = activeNav.categories.all.indexOf($scope.category);

		var query = Category.query({ category : $scope.category , page : $scope.page});

		query.$promise
			.then(function(value) {
				var object   = value.pop();
				$scope.totalItems  = object.count*100;
				$scope.currentPage = $scope.page;
				$scope.posts = value;
			},function(error) {
				console.log(error)
			});

		// go to post reading state
		$scope.paginate = function(currentPage) {
			console.log()
		}
		
	});