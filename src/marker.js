
const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const hotelElem = document.createElement('div');
// hotelElem.className = 'icons';
hotelElem.style.width = "30px";
hotelElem.style.height = "30px";
hotelElem.style.backgroundSize = "contain";
hotelElem.style.backgroundImage = iconURLs.hotels;

const restElem = document.createElement('div');
// restElem.className = 'icons';
restElem.style.width = "30px";
restElem.style.height = "30px";
restElem.style.backgroundSize = "contain";
restElem.style.backgroundImage = iconURLs.restaurants;

const actElem = document.createElement('div');
// actElem.className = 'icons';
actElem.style.width = "30px";
actElem.style.height = "30px";
actElem.style.backgroundSize = "contain";
actElem.style.backgroundImage = iconURLs.activities;


const buildMarker = (type, coordinates ) => {
 let newIcon = new mapboxgl.Marker(actElem);

    if(type === 'hotels'){
     newIcon= new mapboxgl.Marker(hotelElem);
    } else if ( type === 'restaurants'){
        newIcon = new mapboxgl.Marker(restElem);
    }

    return newIcon.setLngLat(coordinates);
}

module.exports = buildMarker;
