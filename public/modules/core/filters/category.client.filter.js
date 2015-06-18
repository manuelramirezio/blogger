angular.module('MyApp')
	.filter('categoryFilter' , function() {
		return function(input) {
			switch(input) {
				case 'main'	   : return 'mTavari'  ; break;
				case 'economic': return 'ekonomika'; break;
				case 'business': return 'biznesi'  ; break;
				default        : return 'sazogadoeba';
			}
		}
	})