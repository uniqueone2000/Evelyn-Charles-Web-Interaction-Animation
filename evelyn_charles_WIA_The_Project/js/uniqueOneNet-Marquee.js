$(document).ready(function(){

	// add the "marquee_panel" class to each img in the "marquee_panels" element
	$(".marquee_panels img").addClass("marquee_panel_photo");	

	$('img.marquee_panel').each(function(index){

		var photoWidth = $('.marquee_container').width();
		var photoPosition = index * photoWidth;

		$('.marquee_photos').append('<img class= "marquee_photo" style= "left:'+ photoPosition 
				+';" src= "'+ $(this).attr('src') +'" alt= "'+ $(this).attr('alt') +'" width= "468" height= "60" />');

		$('.marquee_photos').css('width', photoPosition + photoWidth);
	});

	$('.marquee_panels .marquee_panel').each(function(index){
		$('.marque_nav').append('<a class= "marque_nav_item"></a>');
	});
});