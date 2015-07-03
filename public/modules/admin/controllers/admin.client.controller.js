


angular.module('MyApp')
	.controller('adminCtrl', function($scope, $rootScope, Restangular) {

		var articles = Restangular.all('article');

		$scope.isCollapsed = true;

		articles.getList().then(function(data) {
			$scope.n = data.length;
		});

		$rootScope.$on('addArticle', function(e) {
			$scope.n++;
		});
		$rootScope.$on('removeArticle', function(e, data) {
			$scope.n = data.length;
		});

	});