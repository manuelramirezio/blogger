'use strict';


var angular = require('angular');

require('angular-ui-router');
require('angular-resource');
require('angular-bootstrap');


angular.module('MyApp' , ['ui.router', 'ngResource', 'ui.bootstrap'])
	
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('home', {
				url 		: '/',
				templateUrl : '/modules/core/views/home.client.view.html',
				controller  : 'homeCtrl'
			})
			// .state('category', {
			// 	url 		: '/:category?page',
			// 	templateUrl : '/views/category.client.view.html',
			// 	controller  : 'categoryCtrl',
			// })
			// .state('reading', {
			// 	url 		: '/:category/:id',
			// 	templateUrl : '/views/reading.client.view.html',
			// 	controller	: 'readingCtrl'
			// })

		$urlRouterProvider.otherwise('/');
	});

// require controllers
require('./core/controllers/home.client.controller.js');
