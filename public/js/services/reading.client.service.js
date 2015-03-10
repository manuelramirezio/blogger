


angular.module('MyApp')
	.factory('Reading' , function($resource) {
		return $resource('api/:category/:id' , {} , {
			'update'	:  { method : 'PUT' }
		})
	});