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

	// var text=[];
	// text[0]='تهران';
	// text[1]='مشهد';
	// for (var j=0; j<text.length; j++) {
	// 	var chars = text[j].slice('');
	// 	var container = document.getElementById("write");
	// 	var i = 0;
	// 	setInterval(function () {
 //    	if (i < chars.length) {
 //       	 container.innerHTML += chars[i++];
 //    	} else {
 //        	i = 0;
 //        	container.innerHTML = "";
 //   		 }
	// 	}, 800);
	// };
	

});

