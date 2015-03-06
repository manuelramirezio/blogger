angular.module('MyApp' , ['ui.router','ngResource'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main',{
				url 		: '/',
				templateUrl : '/views/main.client.view.html',
				controller  : 'mainCtrl'
			})
			.state('economic',{
				url 		: '/economic',
				templateUrl : '/views/category.client.view.html',
				controller  : 'categoryCtrl'
			})
			.state('business',{
				url 		: '/business',
				templateUrl : '/views/reading.client.view.html',
				controller  : 'categoryCtrl'
			})
			.state('society',{
				url 		: '/society',
				templateUrl : '/views/category.client.view.html',
				controller  : 'categoryCtrl'
			})
	})
