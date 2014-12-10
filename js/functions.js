$(document).ready(function(){
	$('#btnlike1').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
	});
	$('#btnlike2').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
	});
	$('#btnlike3').click(function(){
		$(this).removeClass('btn-default');
		$(this).addClass('disabled');
		$(this).prop('disabled', true);
	});

	$('#btnview1').click(function(){
		$("#template").attr("href", "css/style1.css");
	});
	$('#btnview2').click(function(){
		$("#template").attr("href", "css/style2.css");
	});
	$('#btnview3').click(function(){
		$("#template").attr("href", "css/style3.css");
	});


}); // end of $(document).ready