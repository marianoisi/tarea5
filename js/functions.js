$(document).ready(function(){
	/* Las siguientes líneas cambian el estilo de los botones like 
	al hacer click sobre los mismos*/
	$('#btnlike1').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
		$(this).children('.glyphicon').removeClass('glyphicon-star');
    	$(this).children('.glyphicon').addClass('glyphicon-ok');
	});
	$('#btnlike2').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
		$(this).children('.glyphicon').removeClass('glyphicon-star');
    	$(this).children('.glyphicon').addClass('glyphicon-ok');
	});
	$('#btnlike3').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
		$(this).children('.glyphicon').removeClass('glyphicon-star');
    	$(this).children('.glyphicon').addClass('glyphicon-ok');
	});

	$('#btnview1').click(function(){
		$("#template").attr("href", "css/style1.css");
		var aux1 = $(this).parent();
        var aux2 = aux1.parent();
        var selected = $('.selected');
        $('.selected').remove();
        aux2.children('h3').append(selected);
	});
	$('#btnview2').click(function(){
		$("#template").attr("href", "css/style2.css");
		var aux1 = $(this).parent();
        var aux2 = aux1.parent();
        var selected = $('.selected');
        $('.selected').remove();
        aux2.children('h3').append(selected);
	});
	$('#btnview3').click(function(){
		$("#template").attr("href", "css/style3.css");
		var aux1 = $(this).parent();
        var aux2 = aux1.parent();
        var selected = $('.selected');
        $('.selected').remove();
        aux2.children('h3').append(selected);
	});


}); // end of $(document).ready