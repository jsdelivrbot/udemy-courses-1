mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2dm9yIiwiYSI6ImNqaWx0ejJkbDJnZ28zcG15NjE5MmR5cGcifQ.3tYja-0fW43DkjRR-ZlmqQ';
const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [74, 40], // starting position [lng, lat]
    zoom: 8,
    pitch: 60,
    rotation: -30
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.on('load', () => {
    map.addSource("osoyoos-trip", {
        "type": "geojson",
        "data": osoyoos_geojson
    })
})
