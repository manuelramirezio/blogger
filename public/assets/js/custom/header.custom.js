



$(function() {

	$("document").scroll(function(){
		$("document").getNiceScroll().resize();
	});
	//animate search on focus
	$('.search-post').on('focus' , function() {
		$(this).animate({width : "+=59px"});
		// $(this).addClass('animated , rubberBand');
	});
	//animate search on focus
	$('.search-post').on('blur' , function() {
		$(this).animate({width : "-=59px"});
		// $(this).removeClass('animated , rubberBand');
	});

	// active click 
	$('nav ul li').on('click' , function() {
		$(this).addClass('active-nav');
		$(this).siblings().removeClass('active-nav');
		console.log('u')
	})

	//hide when scroll
	// var lastScroll = 0;
	// $(document).on('scroll' , function() {

	// 	var navbar = $('nav.navbar'),
	// 		height = navbar.height(),
	// 		scroll = $(this).scrollTop();

	// 	if(scroll > lastScroll && scroll > height){
	// 		navbar.fadeOut(1000);
	// 	} else {
	// 		navbar.fadeIn(1000);
	// 	}
	// 	lastScroll = $(this).scrollTop();
	// });

	function centered(parent , child) {
		var parentHeight = parent.height(),
			childHeight  = child.height();

		var	top = ( parentHeight - childHeight ) / 2;

		child.css({'top' : top});
	}
});