mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2dm9yIiwiYSI6ImNqaWx0ejJkbDJnZ28zcG15NjE5MmR5cGcifQ.3tYja-0fW43DkjRR-ZlmqQ';
const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/kevvor/cjj5vupuh0w0q2robtmfdywd0', // stylesheet location
    center: [2.1734, 41.3851], // starting position [lng, lat]
    zoom: 14,
    pitch: 30,
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
    map.addSource('streets', {
        'type': 'vector',
        'url' : 'mapbox://mapbox.mapbox-streets-v7'
    });

    map.addSource('fill', {
        "type": "geojson",
        "data": custom_poly_1
    });

    map.addSource('line', {
        "type": "geojson",
        "data": custom_poly_2
    });

    map.addSource('circle', {
        type: 'geojson',
        data: custom_poly_3
    })

    map.addLayer({
        'id': 'mapbox-roads',
        'type': 'line',
        'source': 'streets',
        'source-layer': 'road',
        'paint': {
            'line-color': 'pink',
            'line-opacity': 1
        }
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'composite',
        'source-layer': 'trip_json-dcjm3r',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#3498db',
            'line-width': 4
        }
    });

    map.addLayer({
        id: 'poly_1',
        type: 'fill-extrusion',
        source: 'fill',
        paint: {
            'fill-extrusion-color': 'grey',
            'fill-extrusion-height': 1000000
        }
    });

    map.addLayer({
        id: 'circle-1',
        type: 'circle',
        source: 'circle',
        paint: {
            'circle-radius': 50,
            'circle-color': '#ffffff'
        }
    })

    // map.addLayer({
    //     id: 'poly_2',
    //     type: 'line',
    //     source: 'line',
    //     paint: {
    //         'line-color': '#000000',
    //         'line-width': 4
    //     }
    // });

    geojson.features.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

        el.addEventListener('click', function() {
            window.alert(marker.properties.message);
        });

        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });


});

