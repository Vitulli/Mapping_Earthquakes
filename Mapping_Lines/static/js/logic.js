// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.6213, -120.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
let line = [
    [40.642, -73.781],
    [43.678, -79.625],
    [30.198, -97.666],
    [37.621, -122.379]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: "20, 20",
  }).addTo(map);  

// Get data from cityData.js
// let cityData = cities;

// Loop through the cityData array and create one marker for each city.
// Loop through the cityData array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: (city.population / 2E5),
//         weight: 4,
//         color: "orange"
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });




// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


