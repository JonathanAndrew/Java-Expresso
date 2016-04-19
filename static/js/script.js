var initMap = function() {
  var position = new google.maps.LatLng(marker.lat, marker.lng);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: position,
    zoom: 16
  });

  // for each marker passed through, add it to the map with a popup
  
  var googleMarker = new google.maps.Marker({
    position: position,
    title: marker.name,
    map: map
  });
  // Bind a popup to the marker
  googleMarker.addListener("click", function() {
    var infoWindow = new google.maps.InfoWindow({content: "<h3>"+marker.name+"</h3>"});
    infoWindow.open(map, googleMarker);
  });
};