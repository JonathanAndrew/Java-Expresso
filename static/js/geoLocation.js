$(document).ready(function(){

	$("#search").on('click', function(e){
		e.preventDefault();
		getLocation();
		
	});	

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}
	function showPosition(position) {
		console.log(position.coords.latitude.toString() + position.coords.longitude.toString());
	     $("#demo").val(position.coords.latitude.toString() + "," + position.coords.longitude.toString()); 
	     $("#searchLocation").submit();
	};

});