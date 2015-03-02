angular.module('MyApp')
	.directive('myFooter' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			templateUrl	: '/views/footer.client.view.html'
		}
	});