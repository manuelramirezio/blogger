angular.module('MyApp')
	.controller('bannerCtrl' , function($scope) {
		$scope.banners = [
			{
				'width'  : 300,
				'height' : 250,
				'padding-top' : 95
			},
			{
				'width'  : 300,
				'height' : 250,
				'padding-top' : 95
			},
			{
				'width'  : 300,
				'height' : 100,
				'padding-top' : 20
			},
			{
				'width'  : 300,
				'height' : 100,
				'padding-top' : 20
			},
			{
				'width'  : 300,
				'height' : 100,
				'padding-top' : 20
			},
		]
	});