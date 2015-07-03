'use strict';


var angular = require('angular');

require('angular-ui-router');
require('angular-resource');
require('angular-bootstrap');
require('angular-sanitize');
require('restangular');


angular.module('MyApp' , ['ui.router', 'ngResource', 'ui.bootstrap', 'ngSanitize', 'restangular'])
	
	.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
		
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
				templateUrl: '/modules/admin/views/all-articles.client.view.html',
				controller: 'allArticleCtrl'
			})
			.state('admin.new-article', {
				url 		: '/article/new',
				templateUrl: '/modules/admin/views/new-article.client.view.html',
				controller: 'newArticleCtrl'
			})
			.state('admin.edit-article', {
				url 		: '/article/edit/:_id',
				templateUrl: '/modules/admin/views/edit-article.client.view.html',
				controller: 'editArticleCtrl'
			})

		$urlRouterProvider.otherwise('/');

		RestangularProvider.setRestangularFields({
			id: "_id"
		});

	});

// require controllers
require('./core/controllers/home.client.controller.js');

require('./admin/controllers/admin.client.controller.js');
require('./admin/controllers/new-article.client.controller.js');
require('./admin/controllers/edit-article.client.controller.js');
require('./admin/controllers/all-article.client.controller.js');
require('./admin/controllers/modal.client.controller.js');

require('./admin/directives/article.client.directive.js');

require('./admin/filters/title.client.filter.js');