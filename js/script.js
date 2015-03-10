
$(document).ready(function(){
 // <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ scroll arrow js codes ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< 
	$('.mouse-move').click(function (){
		var elementOffset = $('.start-page').offset().top;
		$('html, body').animate({'scrollTop':elementOffset },2000);
    });
 // <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ mobile RTL main index page ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< 
	$(window).resize(function() {
		var pageWidth = $(window).width();
		if( $(window).width()< 767){
			$('.large-desk').addClass('visibility-hidden');
			$('.mobile-size').removeClass('visibility-hidden');
			$('.main-footer ul').removeClass('list-inline');	
		}

	});
 // <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ cloudes fade in and moving ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< 

	setTimeout(function(){
		$(".clouds3").removeClass('.visibility-hidden')
		$(".clouds3").delay(30000).fadeIn(3000);
		$(".clouds2").removeClass('.visibility-hidden')
		$(".clouds2").delay(45000).fadeIn(2000);
		$(".clouds1").removeClass('.visibility-hidden')
		$(".clouds1").delay(20000).fadeIn(3000);
		$(".clouds4").removeClass('.visibility-hidden')
		$(".clouds4").fadeIn(4000);
	});

 // <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ menu icon close and show ~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< 

		$('.navbar-toggle').click(function() {
			$('.top-m').toggleClass('top-animate');
			$('.mid-m').toggleClass('mid-animate');
			$('.bottom-m').toggleClass('bottom-animate');
			$('.menu').toggleClass('opened');
			var height = $( window ).height();
			$('.menu').css('height',height);

	});


 // <>< ~~ <>< ~~ <>< ~~ <>< ~~ showing city keyborde effect~~ <>< ~~ <>< ~~ <>< ~~ <>< ~~ <>< 

	
	var i = 0,
	isTag,
	text;
	var city_id = 0;
	(function type() {
		var text_arr= new Array();
		text_arr[0]='تهران:::;';
		text_arr[1]='مشهد:::;';
		text_arr[2]='اصفهان:::;';
		text_arr[3]='تبریز:::;';
		text_arr[4]='آمل:::;';
		text_arr[5]='کرج:::;';
		text_arr[6]='اراک:::;';
		text_arr[7]='کرمانشاه:::;';
		text_arr[8]='ارومیه:::;';
		text_arr[9]='بابل:::;';
		text_arr[10]='اهواز:::;';
		text_arr[11]='زنجان:::;';
		text_arr[12]='شیراز:::;';
		text_arr[13]='کرمان:::;';
		text_arr[14]='اردبیل:::;';


		var str = text_arr[city_id];
		current_char = str.slice(i, i+1);
		text = str.slice(0, ++i);
		if (text === str)
		{
			city_id++;
			i = 0;
			if(city_id > 14)
				city_id = 0
				return type();
		}
		if (current_char != ":") //////////////////{
		document.getElementById("write").innerHTML = text;

		var char = text.slice(-1);
		if( char === '<' ) isTag = true;
		if( char === '>' ) isTag = false;

		if (isTag) return type();
		setTimeout(type, 200);
		///////////////////////////////////////////};
	}());
});