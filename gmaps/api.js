/*
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>

<div id="map"></div>
*/
import MAP_CONSTANTS from './constants';

export default class GMapsAPI {
    constructor() {
        this._api_key = MAP_CONSTANTS.GMAPS_API_KEY;
        this.lat = MAP_CONSTANTS.DEFAULT_LATITUDE;
        this.lng = MAP_CONSTANTS.DEFAULT_LONGITUDE;
        this.zoom = MAP_CONSTANTS.DEFAULT_ZOOM;
        this.mapNode = null;
    }

    setNodeById(nodeId) {
        this.mapNode = document.querySelector(`#${nodeId}`);
    }

    setNodeByClass(nodeClass) {
        this.mapNode = document.querySelector(`.${nodeClass}`);
    }

    setLat(lat) {
        this.lat = lat;
    }

    setLong(lng) {
        this.lng = lng;
    }

    setZoom(zoom) {
        this.zoom = zoom;
    }

    build() {
        const map = new google.maps.Map(this.mapNode, {
            center: { lat: this.lat, lng: this.lng },
            zoom: this.zoom,
        });
        console.log('map', map);
        return map;
    }

}
/*
Zoom Levels:
1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
*/
