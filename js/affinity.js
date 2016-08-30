$(function() {
	var mapOptions = {
		center: new google.maps.LatLng(36.152910, -115.275383),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map;

	var var_marker = new google.maps.Marker({
		position: var_location,
		map: var_map,
		title:"Affinity Tax & Consulting"});

	$('#contact').on('shown.bs.tab', function(e) {
		if( map == undefined) {
			map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
		}
	});
})