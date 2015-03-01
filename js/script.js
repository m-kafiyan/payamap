$(document).ready(function(){

	$('.mouse-move').click(function (){
		$('html, body').animate({scrollTop:
			100 }, 600);
    });

	var i = 0;
	setInterval(function() { 
     if(i == 2) i=0;

     $('.mouse-move').attr('src', 'image/' + (++i) + '.png' );
	}, 500);

	$(window).resize(function() {
		var pageWidth = $(window).width(); 
		if( $(window).width()< 768){
			$('.large-desk').addClass('visibility-hidden');
			$('.mobile-size').removeClass('visibility-hidden');
		}
	});

});