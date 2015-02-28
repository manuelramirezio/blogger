angular.module('MyApp' , ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
			.when('/',{
				templateUrl:'views/main.client.view.html',
				controller:'mainCtrl'
			})

		$locationProvider.html5Mode(true);
	})
