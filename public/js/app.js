angular.module('MyApp' , ['ngRoute','ngResource'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
			.when('/',{
				templateUrl:'views/main.client.view.html',
				controller:'mainCtrl'
			})
			.when('/economic',{
				templateUrl:'/views/category.client.view.html',
				controller:'categoryCtrl'
			})

		$locationProvider.html5Mode(true);
	})
