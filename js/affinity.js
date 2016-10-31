var var_location = new google.maps.LatLng(36.152910, -115.275383);

var mapOptions = {
	center:var_location,
	zoom:13,
	mapTypeId:google.maps.MapTypeId.ROADMAP
};

$( document ).ready(function() {
//	$('#contact').on('shown.bs.tab', function(e) {
	$('a[href="#contact"]').on('shown.bs.tab', function(e) {
		var map = new google.maps.Map(document.getElementById("googleMap"), window.mapOptions);

		var var_marker = new google.maps.Marker({
			position: window.var_location,
			map: map,
			title:"Affinity Tax & Consulting"});
	});
});