
const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

// const hotelElem = document.createElement('div');
// hotelElem.className = 'icons';
// hotelElem.style.backgroundImage = iconURLs.hotels;

// const restElem = document.createElement('div');
// restElem.className = 'icons';
// restElem.style.backgroundImage = iconURLs.restaurants;

// const actElem = document.createElement('div');
// actElem.className = 'icons';
// actElem.style.backgroundImage = iconURLs.activities;


const buildMarker = (type, coordinates ) => {
   let elem = document.createElement('div');
//    elem.className = 'icons';
   elem.style.backgroundImage = iconURLs[type];
 let newIcon = new mapboxgl.Marker(elem);

//     if(type === 'hotels'){
//      newIcon= new mapboxgl.Marker(hotelElem);
//     } else if ( type ==='restaurants'){
//         newIcon = new mapboxgl.Marker(restElem);
//     }

    return newIcon.setLngLat(coordinates);

}

module.exports = buildMarker;
