angular.module('MyApp')
	.service('activeNav' , function($localStorage) {
		return {
			active 	   : 0,
			categories	   : { all : [
					'main',
					'economic',
					'business',
					'society'
				]},
			setStorage : function(ind) {
				console.log('shemovida');
				$localStorage.active = ind;
			},
			getStorage : function() {
				return $localStorage.active;
			}
		}
	});