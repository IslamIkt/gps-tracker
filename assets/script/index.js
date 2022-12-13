'use strict'

const overlay = document.querySelector('.overlay')

mapboxgl.accessToken = 'pk.eyJ1IjoicGVjY2F0cml4MTMiLCJhIjoiY2xibWQ0NjlwMGczeTNvcDZ6cDdnOTFxZCJ9.5Cpc9H58djOl502MYhnFWw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [0, 0],
    pitch: 40,
    zoom: 16,
    interactive: false
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
    color: '#DD0426'
})

function getLocation(position){
    const {longitude, latitude} = position.coords;
    
    if (longitude && latitude){
        map.setCenter([longitude, latitude]);
        marker.setLngLat([longitude, latitude]).addTo(map);
        setTimeout(() => {overlay.style.display = ' none'}, 750);
    }
}

function errorHandler(event){
    load.style.animationPlayState = 'paused';
    console.log(event.message);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
}

if (navigator.geolocation){
    navigator.geolocation.watchPosition(getLocation, errorHandler, options);
} 
else{
    console.log('Geolocation is not supported by your browser')
}