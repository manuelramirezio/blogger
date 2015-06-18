angular.module('MyApp')
	.factory('Post' , function($resource) {
		return $resource('api/category/:id' , { id : '@id' } , {
			'update' : { method : 'PUT' }
		});
	});