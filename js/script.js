$(document).ready(function(){

	$('.mouse-move').click(function (){
		$('html, body').animate({scrollTop:
			70 }, 600);
    });

	var i = 0;
	setInterval(function() { 
     if(i == 2) i=0;

     $('.mouse-move').attr('src', 'image/' + (++i) + '.png' );
	}, 500);

});