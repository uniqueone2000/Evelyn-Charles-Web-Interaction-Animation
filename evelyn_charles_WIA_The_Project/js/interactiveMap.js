// Utilization of the Interactive Map 

$(document).ready(function(){
	$('#categoryForm').change(function(){
		
		//alert($('#categoryForm option:selected').val());

		var selectedCategory = $('#categoryForm option:selected').val();

		if(selectedCategory == 'ALL'){
			$('a.dot').show(1000);
		}else{
			$('a.dot[department *= "'+selectedCategory+'"]').show(1000);
			$('a.dot[department != "'+selectedCategory+'"]').hide(1000);
		}

	});

	$('a.dot').click(function(){
		
		// dot test to department attribute
		//alert($(this).attr('department'));

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var department = '.department_detail#' + $(this).attr('department');
		var htmlCode = $(department).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .department_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});
}); 