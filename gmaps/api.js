<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>

<div id="map"></div>

map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
});

/*
Zoom Levels:
1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
*/