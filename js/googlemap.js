	/*var myCenter = new google.maps.LatLng(10.791183, 106.696359);

	function initialize() {
		var mapProp = {
		center:myCenter,
		zoom:12,
		scrollwheel:false,
		draggable:false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
	position:myCenter,
	});

	marker.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);*/
	function initialize() {
	 var mapProp = {
    center: new google.maps.LatLng(10.791183, 106.696359),
    zoom:9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);