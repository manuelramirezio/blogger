angular.module('MyApp')
	.directive('myFooter' , function() {
		return {
			restrict	: 'E',
			replace		: true,
			teplateUrl	: '/views/footer.client.view.html'
		}
	});