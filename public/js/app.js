angular.module('MyApp' , ['ui.router','ngResource'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider ){
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);

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
				templateUrl : '/views/category.client.view.html',
				controller  : 'categoryCtrl'
			})
			.state('society',{
				url 		: '/society',
				templateUrl : '/views/category.client.view.html',
				controller  : 'categoryCtrl'
			})
			.state('reading',{
				url 		: '/reading/:id',
				templateUrl : '/views/reading.client.view.html',
				controller	: 'readingCtrl'
			})
	})
