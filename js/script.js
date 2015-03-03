$(document).ready(function(){

	$('.mouse-move').click(function (){
		$('html, body').animate({scrollTop:
			100 }, 600);
    });


	$(window).resize(function() {
		var pageWidth = $(window).width(); 
		if( $(window).width()< 768){
			$('.large-desk').addClass('visibility-hidden');
			$('.mobile-size').removeClass('visibility-hidden');
		}
	});
	
	
		$('.navbar-toggle').click(function() {
			$('.navbar-toggle').fadeOut();
			$('.menu').addClass('opened');
			var height = $( window ).height();
			$('.menu').css('height',height);

	});
	
	$('.btnClose').click(function() {
			$('.menu').removeClass('opened');
			$('.navbar-toggle').fadeIn();

	});


});

