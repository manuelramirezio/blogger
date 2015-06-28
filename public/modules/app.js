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
				views: {
						'header' : { templateUrl: '/modules/core/views/header.client.view.html' },
						'content': { templateUrl: '/modules/core/views/content.client.view.html' },
						'footer' : { templateUrl: '/modules/core/views/footer.client.view.html' }
				},
				controller  : 'homeCtrl'
			})
			.state('admin', {
				url 		: '/admin',
				views: {
						'header' : { templateUrl: '/modules/admin/views/header.client.view.html' },
						'content': { templateUrl: '/modules/admin/views/content.client.view.html' }						
				}
			})
			.state('admin.articles', {
				url 		: '/articles',
				templateUrl: '/modules/admin/views/all-articles.client.view.html'
			})
			.state('admin.new-article', {
				url 		: '/article/new',
				templateUrl: '/modules/admin/views/new-article.client.view.html'
			})

		$urlRouterProvider.otherwise('/');
	});

// require controllers
require('./core/controllers/home.client.controller.js');

require('./admin/controllers/admin.client.controller.js');
