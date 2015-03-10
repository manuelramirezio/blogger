angular.module('MyApp' , ['ui.router','ngResource','ngStorage','ui.bootstrap'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider ){
		
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('main',{
				url 		: '/',
				templateUrl : '/views/main.client.view.html',
				controller  : 'mainCtrl'
			})
			.state('category',{
				url 		: '/:category?page',
				templateUrl : '/views/category.client.view.html',
				controller  : 'categoryCtrl',
			})
			.state('reading',{
				url 		: '/:category/:id',
				templateUrl : '/views/reading.client.view.html',
				controller	: 'readingCtrl'
			})

		$urlRouterProvider.otherwise('/');
	})
