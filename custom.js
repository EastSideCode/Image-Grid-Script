$(document).ready(function(){

	/* for tab 1 */
	var countInRow = 3;
	var imageCount = $('#imageList li.image').length;
	var clicked_id;
	var old_id;
	var rowNumber;
	var old_rowNumber;
	var repeatCount=0;
	$(window).resize(function(){
		if (window.matchMedia('(min-width: 1000px)').matches)
	        countInRow = 3;
	    else if(window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(max-width: 1000px)').matches)
	        countInRow = 2;
	    else if(window.matchMedia('(max-width: 600px)').matches)
	        countInRow = 1;

			$(".imageList").each(function() {
				imgId = $(this).attr('id');
				var tmp = $('#'+imgId+' li.bio')
				$("#"+imgId+" li.bio").remove();
				var rowNumber = Math.floor(clicked_id/countInRow);
				$("#"+imgId+" li.none").remove();
				for(var i=clicked_id+1; i<=(rowNumber+1)*countInRow-1; i++)
					$("#"+imgId).append('<li class="image none"></li>');
				var lastElementInRow = $("#"+imgId+" li:eq('"+((rowNumber+1)*countInRow-1)+"')");
				 tmp.insertAfter(lastElementInRow);

				 var left = $("#"+imgId+" li.image").eq(clicked_id).offset().left + $("#"+imgId+" li.image").eq(clicked_id).width()/2 - 20 - tmp.offset().left + 'px';
		 			$("#"+imgId+" .bio .tri_div").css("left", left);

			});


	});

		var bio_close = 0;
		var old_id = 0;
    $('.imageList li.image').click(function(){

		imageListId = $(this).parent().attr('id');

		var div_id = $(this).parent().parent().parent().parent().attr('id');

		if (window.matchMedia('(min-width: 1000px)').matches)
	        countInRow = 3;
	    else if(window.matchMedia('(min-width: 600px)').matches && window.matchMedia('(max-width: 1000px)').matches)
	        countInRow = 2;
	    else if(window.matchMedia('(max-width: 600px)').matches)
	        countInRow = 1;
		if(repeatCount == 0) {
			repeatCount++;
		}
		clicked_id = $(this).index();

		if($("#"+imageListId+" li.bio").css('display') == "list-item" && clicked_id == old_id){
			bio_close = 1;
			$("#"+imageListId+" li.bio").remove();
			//$("#"+imageListId+" li.bio").slideUp('normal', function(){$("#"+imageListId+" li.bio").remove();});
		} else {

		$("#"+imageListId+" li.bio").remove();

		clicked_id = $(this).index();

		rowNumber = Math.floor(clicked_id/countInRow);

		$("#"+imageListId+" li.none").remove();

		for(var i=0; i<countInRow-(imageCount%countInRow); i++)

		$("#"+imageListId).append('<li class="image none"></li>');

		var bioContent = $("#"+div_id+" .bios li:eq('"+clicked_id+"')").html();

		var lastElementInRow = $("#"+imageListId+" li:eq('"+((rowNumber+1)*countInRow-1)+"')");

		var bio = $("<li class='bio'><div class ='tri_div'></div>"+bioContent+"</li>");

		if(clicked_id!=old_id){

			if(old_rowNumber==rowNumber){
				if(repeatCount%2==0){
					if(bio_close == 1){
							bio_close = 0;
							bio.insertAfter(lastElementInRow).hide().slideDown('normal');
					}else {
					bio.insertAfter(lastElementInRow)
					}
				}else{
					if(bio_close == 1){
							bio_close = 0;
							bio.insertAfter(lastElementInRow).hide().slideDown('normal');
					}else {
						bio.insertAfter(lastElementInRow)
					}

				}
			}
			else {
					bio.insertAfter(lastElementInRow).hide().slideDown('normal');
					repeatCount=0;
			}
		}
		if(clicked_id==old_id){
			bio_close = 0;
			repeatCount++;
			if(repeatCount%2==1){
				bio.insertAfter(lastElementInRow).hide().slideDown('normal');
			}else{
					//	$("#"+imageListId+" li.bio").slideUp('normal', function(){$("#"+imageListId+" li.bio").remove();});
					if((repeatCount%2) == 0){
							bio.insertAfter(lastElementInRow).hide().slideDown('normal');
					}else{
						$("#imageList li.bio").slideUp('normal', function(){$('#imageList li.bio').remove();});
					}
			}
		}
		if($("#"+imageListId+" .bio").length>0){
			var left = $(this).offset().left + $(this).width()/2 - 20 - $("#"+imageListId+" .bio").offset().left + 'px';
			$("#"+imageListId+" .bio .tri_div").css("left", left);
		}
	}
		old_id = clicked_id;
		old_rowNumber = rowNumber;
	});


	/* for tab 2 */



	/* end for tab 2 */
});
