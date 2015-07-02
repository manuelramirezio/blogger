


angular.module('MyApp')
						.filter('titleFilter', function() {
							return function(title) {
								if(title.length > 15) {
									return title.substring(0, 15).concat('..');
								} else {
									return title;
								}
							};
						});