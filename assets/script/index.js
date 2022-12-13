'use strict'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = 'pk.eyJ1IjoicGVjY2F0cml4MTMiLCJhIjoiY2xibWQ0NjlwMGczeTNvcDZ6cDdnOTFxZCJ9.5Cpc9H58djOl502MYhnFWw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
