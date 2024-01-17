/**
* Init js
* Version 1.0
**/
function initJs($) {
	(this.owlCarouselJs = function() {
		// Testimonial
		$('.main_banner').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			autoplay: false	,
			autoplayTimeout:5000,
			smartSpeed: 1000,
			responsive:{
				0:{
					items:1,
				},
			}
		});
	}),

	(this.customContainerFinder = function(){
		$(window).on('load resize scroll', function(){
			var winWidth = $(window).innerWidth();
			var containerWidth = $('.container').innerWidth();
			var totalSubtractedWidth = winWidth-containerWidth;
			var totalDividedWidth = totalSubtractedWidth/2;
			$('.main_banner .main_content_wrap .content_wrap').css('left', totalDividedWidth+"px");
		})
	})

(this.tabJs = function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');

		$('.tab-content').each(function(index, el) {
			if($(this).hasClass('current')) {
				$(this).find('.et_pb_module').fadeOut();
			}
		});
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		$("#"+tab_id+' .et_pb_module').fadeIn();
	});
}),

(this.initMain = function() {
	let _this = this;
	_this.owlCarouselJs();
	_this.customContainerFinder();
    

});

}

try {
	jQuery(function ($) {
		let initObj = new initJs($);
		initObj.initMain();
	});
} catch (err) {
	console.log(err.message);
}


