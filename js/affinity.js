$(function() {
	var location={lat: 36.152910, lng: -115.275383};

	var mapOptions = {
		center: new google.maps.LatLng(location),
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map;

	var var_marker = new google.maps.Marker({
		position: location,
		map: map,
		title:"Affinity Tax & Consulting"});

	$('#contact').on('shown.bs.tab', function(e) {
		if( map == undefined) {
			map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
		}
	});
})