$(function(){
	
	$(".texto").mCustomScrollbar({
		scrollButtons:{
			enable:false
		}
	});

	$('.separador').each(function(){
		var $obj = $(this);

		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $obj.data('speed')); 
			var bgpos = yPos + 'px';
			$obj.css('background-position-y', bgpos );
		});
	});

	$('.animate').click(function(){
		$('html, body').stop(true, true).animate({scrollTop: $($(this).attr('href')).offset().top - 60}, 2000);
		return false;
	})
});