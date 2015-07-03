


angular.module('MyApp')
	.controller('editArticleCtrl', function($scope, $rootScope, Restangular, $stateParams) {

		var articleResource =  Restangular.all('article');


		var id = $stateParams._id;

		Restangular.one('article', id).get().then(function(data) {
			data.created = new Date(data.created)
			$scope.article = data;
		})

		$scope.editArticle = function(article) {
			article.put().then(function(data) {
				
			});
		}

	});