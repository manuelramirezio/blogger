angular.module('MyApp')
	.controller('headerCtrl' , function($scope , activeNav) {
		$scope.active = activeNav.active;
		$scope.navs = 
		[
			{	href : 'main'		},
			{	href : 'economic'	},
			{	href : 'business'	},
			{	href : 'society'	}
		]
		$scope.activate = function(ind) {
			$scope.active 	 = ind;
			activeNav.active = ind;
		}
		$scope.$watch(function() { 
			return activeNav.active;
		},function(newVal , oldVal) {
			$scope.active = newVal;
		});
		$scope.search = '';
	});