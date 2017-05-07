$(function () {
	var okno = $(window);
	var menu = $('.navbar-header');


	/*transparent scroll*/

	
	if (okno.scrollTop() >= 100) {
		menu.addClass('scroll');
	}

	okno.scroll(function () {



		if (okno.scrollTop() >= 100) {
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');
		}

	});
	/*smooth scroll*/

	$(document).on('click', 'a[href^="#"]', function(event) {
		console.log('test');
		event.preventDefault();
		var menuHeight = $( '.navbar-header').height();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top - menuHeight
		}, 500);
	});

});