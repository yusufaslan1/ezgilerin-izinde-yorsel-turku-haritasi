$(".home-slider").owlCarousel({
	items: 1,
	autoplay: true,
	loop: true,
	autoplayHoverPause: 5000,
	nav: true,
	dots: false,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
});

$(".home-news-slider").owlCarousel({
	items: 1,
	autoplay: true,
	loop: true,
	autoplayHoverPause: 5000,
	nav: false,
	dots: true,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
});

$(".brand-slider").owlCarousel({
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	autoplay: true,
	loop: true,
	nav: false,
	autoplayHoverPause: true,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	dots: false,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		480: {
			items: 2,
		},
		769: {
			items: 2,
		},
		1025: {
			items: 5,
		}
	}

});
$(".slider-boxes").owlCarousel({
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	autoplay: true,
	loop: true,
	nav: true,
	autoplayHoverPause: true,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	dots: false,
	margin: 25,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		480: {
			items: 2,
		},
		769: {
			items: 2,
		},
		1025: {
			items: 4,
		}
	}

});

/*		$(".home-boxes").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		autoplay: true,
		loop:true,
		nav:false,
		autoplayHoverPause: true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			769:{
				items:2,
			},
			1025:{
				items:4,
			}
		}
		
	});	
	*/

$('#nav-icon').click(function () {
	$(this).toggleClass('open');
	$('header .center').toggleClass('header-open');
	$('nav').slideToggle();
	//$('.player-nav-menu' ).toggle( "slide", {direction:'right'} );
});


$(document).ready(function () {
	if ($(window).width() > 991) {
		$('.box-list-urun').hover(function () {
			$(this).toggleClass('shadow2');
		});
	}
	else {
	}
})

//$('#tablo').dataTable({
//	scrollX: 200,
//	deferRender: true,
//	scroller: true
//});

$(function () {
	$("#tabs").tabs();
});


$('.home-box').hover(function () {
	$(this).children('i').toggleClass('animated rotateIn');
});

$(".accordion-head").append("<i class='fa fa-angle-down'></i>");

$('nav ul li ').hover(function () {
	$(this).children('ul li ul').stop(true, false, true).slideToggle(300);
});

$(function () {
	$("#accordion").accordion({
		heightStyle: "content"
	});
});

/*$(document).ready(function() {   
	if ($(window).width() > 991) {   
		$("header").addClass('shadow2'); 
	} 
	else{
		$("header").removeClass('shadow2'); 
	}   
});*/

$(document).ready(function () {
	if ($(window).width() > 991) {
		$("nav").addClass('shadow2');
	}
	else {
		$("nav").removeClass('shadow2');
	}
});

/*$(window).bind('scroll', function () {
if ($(window).width() > 991) {  
   if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky-menu animated fadeInDown');
    } else {
        $('header').removeClass('sticky-menu animated fadeInDown');
    }
} 	
});*/


$(".slider-down-button").click(function () {
	$('html,body').animate({
		scrollTop:
			$("#first-container").offset().top
	}, 'slow');

});

$(".talep-formu").click(function () {
	$('html,body').animate({
		scrollTop:
			$("#12").offset().top
	}, 'slow');

});


$(function () {

	$(".up-icon").click(function () {
		$("html,body").stop().animate({ scrollTop: "0" }, 1000);
	});
});
$(window).scroll(function () {
	var uzunluk = $(document).scrollTop();
	if (uzunluk > 300) $(".up-icon").fadeIn(500);
	else { $(".up-icon").fadeOut(500); }
});


$(document).ready(function () {
	$(function () {
		var maxL = 150;
		$('.blog .home-port-box-title p').each(function (i, div) {
			var text = $(div).text();
			if (text.length > maxL) {
				var begin = text.substr(0, maxL),
					end = text.substr(maxL);
				$(div).html(begin)
					.append($('<a class="readmore"/>').attr('href', '#').html('...'))// # link geliyor
					.append($('<div class="hidden" />').html(end));// 200 karakterden sonraki yazÄ±lara bu divi atÄ±yor. style dosyasÄ±na ".hidden { display none;} " eklenmesi gerekiyor.
			}
		});
	})
});
$(function () {
	$(".tabs-all").tabs({
		show: { effect: "blind", duration: 500 },
		hide: { effect: "blind", duration: 500 }
	});
});
$(function () {
	$(".tabs-alls").tabs();
});


