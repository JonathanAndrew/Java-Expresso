$(document).ready(function(){

$('.delete-link').on('click',function(e){
	e.preventDefault();
	var token = $(this).data('token');
	var myUrl = $(this).attr('href');
	console.log(myUrl);
	$.ajax({
		method:'DELETE',
		url:myUrl,
        type: 'post',
        data: token,
	}).done(function(req,res){
		res.send('favorite deleted')
	});
});

});