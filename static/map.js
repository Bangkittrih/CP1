var OSM_MAPBOX_ATTRIB = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>' +
                        ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">' +
                        'CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

var map = L.map('map', {
    fullscreenControl: true
});
map.setView([-1.4228359, 118.9002254], 5);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/redshadow.j99f50fg/{z}/{x}/{y}.png', {
    attribution: OSM_MAPBOX_ATTRIB,
    maxZoom: 18
}).addTo(map);


L.tileLayer('/tiles/pantai/{z}/{x}/{y}.png', {
    attribution: '(c) Narotama',
    maxZoom: 18
}).addTo(map);

// $.get('/tiles/trento.geojson').done(function(data){
//     L.geoJson(data).addTo(map);
// }).fail(function(jqXHR, textStatus, errorThrown){
//     alert("Something bad happened: " + textStatus);
// });
