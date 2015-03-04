angular.module('MyApp')
	.controller('mainCtrl' , function($scope , Post) {

		var query = Post.query();
		query.$promise.then(function(value) {
			console.log(value[0].body,value[1].title)
		},function(reason) {
			console.log(reason)			
		})
		// console.log(query)
		//get main post
		var date   = new Date(),
			day    = date.getDay() + 1,
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
		//end of main post

		//get hot news


		//end of hot-news

		//get actual news


		//end of actual news



	});