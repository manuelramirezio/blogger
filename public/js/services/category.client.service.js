


angular.module('MyApp')
	.factory('Category' , function($resource) {
		return $resource('api/:category' , { category : '@category' } , {
			'update' : { method : 'PUT' }
		});
	});