angular.module('MyApp')
	.controller('mainCtrl' , function($scope) {
		var date   = new Date(),
			day    = date.getDay(),
			month  = date.getMonth() + 1,
			year   = date.getFullYear();

			day     = day < 10 ? '0' + day : day;
			month   = month < 10 ? '0' + month : month;
			dateStr = day + '.' + month + '.' + year;

		$scope.blog = {
			title 	 : 'es aris Cemi pirveli blogis saTauri',
			category : 'ekonomika',
			created  :  dateStr,
			body     : 'gamarjobaT es aris Cemi pirveli blogis teqsti rame unda movifiqro ro didi moculobiTi gamoCndes xo azrze xarT ara',
			author   : 'laSa kaxiZe'
		}
	});