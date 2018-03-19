$(document).ready(function() {
	(function($) {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 40) {
				$(".header").css("background", "#efefef");
			} else {
				$(".header").css("background", "transparent");
			}
		});
		
		//tab
		$('.tab_container ul.tab_hd li a').click(function (g) {
			var tab = $(this).closest('.tab_container'),
				index = $(this).closest('li').index();

			tab.find('ul.tab_hd > li').removeClass('current');
			$(this).closest('li').addClass('current');

			var height = $(".tabs_item").height();
			console.log(height)
			var translateY = "translateY(-" + 983*index +"px)";
			$(".tab_bd").css("transform",translateY);
			
			g.preventDefault();
		} );
		
		// 菜单延迟
		var timer;
		$("#brandnav,#pronav").on("mouseenter", function(){
			clearTimeout(timer);
			$(".pro-nav").removeClass("hover");
			$(this).find(".pro-nav").addClass("hover");
		}).on("mouseleave", function(){
			timer = setTimeout(function(){
				$(".pro-nav").removeClass("hover");
			},500)
		})
		
	})(jQuery);
});