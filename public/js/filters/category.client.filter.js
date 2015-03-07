angular.module('MyApp')
	.filter('categoryFilter' , function() {
		return function(input) {
			switch(input) {
				case 'economic': return 'ekonomika'; break;
				case 'business': return 'biznesi'; break;
				default        : return 'sazogadoeba';
			}
		}
	})