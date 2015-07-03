


angular.module('MyApp')
	.controller('allArticleCtrl', function($scope, $rootScope, Restangular, $modal) {

		var articleResource = Restangular.all('article');
		
		$scope.articles = [];

		$scope.isCollapsed = true;

		articleResource.getList().then(function(articles) {
			$scope.articles = articles;
		});

		$rootScope.$on('removeArticle', function(e, data) {
			$scope.articles = data;
		});


		// modal functions
		$scope.alert = function(article) {
			$modal.open({
				animation: true,
				templateUrl: 'alertModal.html',
				controller: 'alertModalCtrl',
				size: 'sm',
				resolve: {
					article: function () {
						return article;
					}
				}
			});
		}

	});