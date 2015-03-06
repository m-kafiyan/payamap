
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



	//var str = "<p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p><p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p>",
	var i = 0,
	isTag,
	text;
	var city_id = 0;
	(function type() {
		var text_arr= new Array();
		text_arr[0]='تهران;';
		text_arr[1]='مشهد;';
		text_arr[2]='اصفهان;';
		text_arr[3]='تبریز;';
		text_arr[4]='آمل;';
		text_arr[5]='کرج;';
		text_arr[6]='اراک;';
		text_arr[7]='کرمانشاه;';
		text_arr[8]='ارومیه;';
		text_arr[9]='بابل;';
		text_arr[10]='اهواز;';
		text_arr[11]='زنجان;';
		text_arr[12]='شیراز;';
		text_arr[13]='کرمان;';
		text_arr[14]='اردبیل;';


		var str = text_arr[city_id];
		text = str.slice(0, ++i);
		if (text === str)
		{
			city_id++;
			i = 0;
			if(city_id > 14)
				city_id = 0
				return type();
		}

		document.getElementById("write").innerHTML = text;

		var char = text.slice(-1);
		if( char === '<' ) isTag = true;
		if( char === '>' ) isTag = false;

		if (isTag) return type();
		setTimeout(type, 250);
	}());


});