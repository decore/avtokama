$(document).ready(function(){

	$('.header .owl-carousel').owlCarousel({
		baseClass : "owl-carousel",
		mergeFit: true,
		items: 1,
		navigation: true,
		navigationText: false,
		scrollPerPage: true,
		itemsScaleUp:true,
		pagination: false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1]
	});
	$('.partners .owl-carousel').owlCarousel({
		mergeFit: true,
		navigationText: false,
		navigation: true,
		pagination: false,
		items: 3,
		scrollPerPage: false,
		itemsScaleUp:true,
		addClassActive: true,
		responsive:{
			0:{
				items: 1
			},
			479:{
				items: 1
			},
			640:{
				items: 3
			},
			768:{
				items: 3
			},
			980:{
				items: 3
			},
			1200:{
				items: 3
			}
		}
	});
	$('.special .owl-carousel').owlCarousel({
		// mergeFit: true,
		navigationText: false,
		navigation: true,
		pagination: false,
		items: 3,
		scrollPerPage: false,
		itemsScaleUp: true,
		responsive:{
			0:{
				items: 1
			},
			640:{
				items: 3
			},
			768:{
				items: 3
			},
			1200:{
				items: 3
			}
		}
	});
	$('.news .owl-carousel').owlCarousel({
		// mergeFit: true,
		items: 1,
		navigation: false,
		scrollPerPage: true,
		itemsScaleUp:true,
		pagination: true,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1]
	});


	// SCROLL ANIMATION
	// https://github.com/matthieua/WOW
	if (!$.browser.mozilla) {
		var wow1 = new WOW(
			{
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false
			}
		);
		setTimeout(function(){
			wow1.init();
		}, 1000);
	};
	$('.services-aside .services-aside-item a').click(function(){
		$(this).parent().siblings().removeClass('active');
		if(!$(this).parent().hasClass('active')){
			$(this).parent().addClass('active');
		}
	});
});
