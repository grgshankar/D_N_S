/**
* Init js
* Version 1.0
**/
function initJs($) {
	(this.owlCarouselJs = function() {
		// Testimonial
		$('.main_banner').owlCarousel({
			loop:true,
			margin:40,
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


