


angular.module('MyApp')
	.controller('newArticleCtrl', function($scope, $rootScope, Restangular) {

		var articleResource =  Restangular.all('article');

		$scope.article = {
			title: '',
			image: '',
			category: '',
			body: '',
			created: '',
			author: ''
		}

		// article functions
		$scope.addArticle = function() {
			articleResource.post($scope.article).then(function(newArticle){
				$rootScope.$broadcast('addArticle');
				$scope.articles.push(newArticle);
			});
		}
		
		// body text append
		$scope.append = function(text) {
    		$rootScope.$broadcast('add', text);
		}
	});