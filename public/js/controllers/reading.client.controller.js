angular.module('MyApp')
	.controller('readingCtrl' , function($scope , $stateParams , $localStorage , Reading , activeNav) {
		
		var storage = $localStorage.active;
		$scope.active 	  = 
			storage == undefined ? activeNav.active : storage;

		$scope.categories = activeNav.categories.all;

		var query = Reading.get({ id : $stateParams.id });

		query.$promise
			 .then(function(value){
			 	$scope.post = value;
			 }, function(err) {
			 	console.log(err);
			 });
	});