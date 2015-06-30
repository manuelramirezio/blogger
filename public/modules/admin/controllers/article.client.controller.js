


angular.module('MyApp')
	.controller('articleCtrl', function($scope, $rootScope) {

		
		$scope.append = function(text) {
    		$rootScope.$broadcast('add', text);
		}

	});