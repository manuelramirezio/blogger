angular.module('MyApp')
	.service('activeNav' , function($localStorage) {
		return {
			active 	   : 0,
			categories	   : { all : [
					'main',
					'economic',
					'business',
					'society'
				]}
		}
	});