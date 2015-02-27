$(document).ready(function(){

	$('.mouse-move').click(function (){
		$('html, body').animate({scrollTop:
			 $('.header').offset().top }, 600);
    });
	}
);