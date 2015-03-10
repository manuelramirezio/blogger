angular.module('MyApp')
	.controller('readingCtrl' , function($scope , $stateParams , $location , Reading , activeNav) {
		
		var category = $stateParams.category;

		var query = Reading.get({ category : category , id : $stateParams.id });
		
		$scope.activate = function(ind) {
			$scope.active 	 = ind;
			activeNav.active = ind;
		}

		$scope.path		  = $location.absUrl();
		$scope.categories = activeNav.categories.all;
		$scope.active 	  = $scope.categories.indexOf($stateParams.category);
		activeNav.active  = $scope.active;

		query.$promise
			.then(function(value){
				$scope.post = value;
			}, function(err) {
				console.log(err);
			});
	});	