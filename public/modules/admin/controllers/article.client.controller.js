


angular.module('MyApp')
	.controller('articleCtrl', function($scope, $rootScope, Restangular, $modal) {

		var articleResource =  Restangular.all('article');


		$scope.articles = [];

		$scope.article = {
			title: '',
			image: '',
			category: '',
			body: '',
			created: '',
			author: ''
		}

		articleResource.getList().then(function(articles) {
			$scope.articles = articles;
		});

		// article functions
		$scope.addArticle = function() {
			articleResource.post($scope.article).then(function(newArticle){
				$scope.articles.push(newArticle);
			});
		}

		$scope.getArticle = function() {
			
		}

		$scope.editArticle = function(article) {
			article.created = new Date(article.created);
			$scope.article = article;
		}


		// body text append
		$scope.append = function(text) {
    		$rootScope.$broadcast('add', text);
		}

		//
		$rootScope.$on('removeArticle', function(e, val) {
			$scope.articles = val;
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

angular.module('MyApp').controller('alertModalCtrl', function ($scope, $rootScope, $modalInstance, Restangular, article) {

	var articleResource =  Restangular.all('article');

	var articles;

	articleResource.getList().then(function(data) {
		articles = data;
	});

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