


angular.module('MyApp').directive('myText', function($rootScope) {
	return {
		link: function(scope, element, attrs) {
			element = element[0];

			$rootScope.$on('add', function(e, val) {

				if (document.selection) {
					element.focus();
					var sel = document.selection.createRange();
					sel.text = val;
					element[0].focus();
				} else if (element.selectionStart || element.selectionStart === 0) {
					var startPos = element.selectionStart;
					var endPos = element.selectionEnd;
					var scrollTop = element.scrollTop;
					scope.article_body = element.value.substring(0, startPos) + val + element.value.substring(endPos, element.value.length);
					element.focus();
					element.selectionStart = startPos + val.length;
					element.selectionEnd = startPos + val.length;
					element.scrollTop = scrollTop;
				} else {
					element.value += val;
					element.focus();
				}
				
			});
		}
	}
})