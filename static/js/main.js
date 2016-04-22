$(document).ready(function(){

$('#search').on('click',function(){
	$('.loading').show();
	$('#search').hide();
});
$('.backBTN').on('click',function(){
	$('.backBTN').hide();
	$('.favoritesPage').hide();
	$('.loading').show();
})
$('.delete-link').on('click',function(e){
	e.preventDefault();
	// var token = $(this).data('token');
	var myUrl = $(this).attr('href');
	console.log(myUrl);
	$.ajax({
		url:myUrl,
        type: 'DELETE',
        // data: token,
	}).done(function(req,res){
		location.reload();
		console.log('favorite deleted')
	});
});

$('#favBTN').on("click",function(){
	$('body').css("background-image", "url(/image/coffee.png)");
});

});