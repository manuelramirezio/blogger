angular.module('MyApp')
	.controller('headerCtrl' , function($scope , activeNav) {
		$scope.active = activeNav.active;
		$scope.navs = 
		[
			{	name : 'mTavari', 	    href : '/'	},
			{	name : 'ekonomika', 	href : '/economic'	},
			{	name : 'biznesi', 	    href : '/business'	},
			{	name : 'sazogadoeba', 	href : '/society'	}
		]
		$scope.activate = function(ind) {
			$scope.active = ind;
			activeNav.active = ind;
		}
		$scope.$watch(function(){ return activeNav.active },function(newVal) {
			$scope.active = newVal;
		});
		$scope.search = '' ;
	});