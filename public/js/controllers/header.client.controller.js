angular.module('MyApp')
	.controller('headerCtrl' , function($scope) {
		$scope.active = 0;
		$scope.navs = 
		[
			{	name : 'mTavari', 	    href : '/'	},
			{	name : 'ekonomika', 	href : '/economic'	},
			{	name : 'biznesi', 	    href : '/business'	},
			{	name : 'sazogadoeba', 	href : '/society'	}
		]
		$scope.activate = function(ind) {
			$scope.active = ind;
		}

		$scope.search = '' ;
	});