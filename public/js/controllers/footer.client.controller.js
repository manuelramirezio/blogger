angular.module('MyApp')
	.controller('footerCtrl' , function($scope , activeNav) {
		$scope.active = activeNav.active;

		$scope.activate = function(ind) {
			$scope.active = ind;
			activeNav.active = ind;
		}
		$scope.$watch(function(){ return activeNav.active },function(newVal) {
			$scope.active = newVal;
		});
	});