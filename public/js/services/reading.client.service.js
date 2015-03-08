


angular.module('MyApp')
	.factory('Reading' , function($resource) {
		return $resource('api/reading/:id' , {} , {
			'update'	:  { method : 'PUT' }
		})
	});