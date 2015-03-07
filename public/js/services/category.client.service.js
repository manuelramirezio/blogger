


angular.module('MyApp')
	.factory('Category' , function($resource) {
		return $resource('api/:category' , { } , {
			'update' : { method : 'PUT' }
		});
	});