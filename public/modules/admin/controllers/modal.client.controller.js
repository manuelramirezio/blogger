


angular.module('MyApp')
	.controller('alertModalCtrl', function ($scope, $rootScope, $modalInstance, Restangular, article) {

		var articleResource =  Restangular.all('article');

		$scope.ok = function () {
			article.remove().then(function(success) {
				return articleResource.getList();
			}).then(function(data) {
				$rootScope.$broadcast('removeArticle', data);
			})
			
			$modalInstance.close();
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});