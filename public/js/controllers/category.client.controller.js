angular.module('MyApp')
	.controller('categoryCtrl' , function($scope , activeNav) {
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
	});