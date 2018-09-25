// console.log('hello world');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1IjoiYXllbWFjIiwiYSI6ImNqbWk1MnRhczAxY3kzcXFsNmdkZGpiNnkifQ.AP-AtdHq2H8gO6gOwWQdUQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "45px";
markerDomEl.style.height = "45px";
markerDomEl.style.backgroundImage = "url(https://image.ibb.co/kwTjSU/Dan.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


buildMarker("activities", [-73.9857, 40.7484]).addTo(map);


