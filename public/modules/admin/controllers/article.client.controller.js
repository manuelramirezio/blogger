


angular.module('MyApp')
	.controller('articleCtrl', function($scope, $rootScope, Restangular) {

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

		$scope.addArticle = function() {
			articleResource.post($scope.article).then(function(newArticle){
				console.log(newArticle);
				$scope.articles.push(newArticle);
			})
		}

		// body text append
		$scope.append = function(text) {
    		$rootScope.$broadcast('add', text);
		}

	});