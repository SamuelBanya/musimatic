// Setting latitude and longitude to [0, 0] by default:
var iss_latitude = 0;
var iss_longitude = 0;

const map = L.map("mapid", {
    center: [iss_latitude, iss_longitude],
    minZoom: 0,
    maxZoom: 18,
    zoom: 2
});

L.tileLayer("//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"]
}).addTo(map);

const marker = L.marker([iss_latitude, iss_longitude]).addTo(map);
marker.bindPopup("<strong>Location Of ISS Space Station:</strong><br />Latitude: " + iss_latitude + "<br />" + "Longitude: " + iss_longitude).openPopup();

var circle = L.circle([iss_latitude, iss_longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25,
    radius: 200
}).addTo(map);

function find_ISS_location() {
$.getJSON("data/iss_location.json")
    .done(function(data) {
	json_obj = data;
	var iss_latitude = json_obj["iss_position"]["latitude"];
	var iss_longitude = json_obj["iss_position"]["longitude"];
	var iss_unix_timestamp = json_obj["timestamp"];
	var iss_date = new Date(iss_unix_timestamp * 1000).toLocaleDateString("en-US");
	var iss_time = new Date(iss_unix_timestamp * 1000).toLocaleTimeString("en-US");
	var date = document.querySelector("#date");
	var time = document.querySelector("#time");
	var lat = document.querySelector("#lat");
	var lon = document.querySelector("#lon");
	date.innerText = iss_date;
	time.innerText = iss_time;
	lat.innerText = iss_latitude;
	lon.innerText = iss_longitude;
	update_ISS_location(iss_latitude, iss_longitude,);
    }).fail(function() {
	$("#location_div").html("Sorry! We cannot not load the ISS Location at this moment");
    }).catch(e => console.log(e));
}
    
function update_ISS_location(iss_latitude, iss_longitude) {
    marker.setLatLng([iss_latitude, iss_longitude]);
    marker.bindPopup("<strong>Location Of ISS Space Station:</strong><br />Latitude: " + iss_latitude + "<br />" + "Longitude: " + iss_longitude).openPopup();
    map.setView([iss_latitude, iss_longitude]);
    circle.setLatLng([iss_latitude, iss_longitude]);
}

find_ISS_location();

setInterval(find_ISS_location, 1000);

// Space Weather JQuery UI App:
$(function() {
    console.log("Space Weather JQuery UI App Running");
    $("#space_weather_tabs").tabs();

    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("https://services.swpc.noaa.gov/json/solar-cycle/sunspots.json")
	.then(response => response.json())
	.then(data => {
	    console.log("Sunspot Data: ", data, "\n", "Date Retrieved: ", data[data.length - 1]["time-tag"], "\n", "Latest Sunspots: ", data[data.length - 1]["ssn"]);
	    var date_sunspot_selector = document.querySelector("#date_sunspot_selector");
	    var sunspot_selector = document.querySelector("#sunspot_selector");
	    date_sunspot_selector.innerText = "Date Sunspot Data Taken: " + data[data.length - 1]["time-tag"];
	    sunspot_selector.innerText = "Current Month's SSN (Sun Spot Number): " + data[data.length - 1]["ssn"];
	})

    // Obtain the "kp_index":
    // https://services.swpc.noaa.gov/json/planetary_k_index_1m.json
    fetch("https://services.swpc.noaa.gov/json/planetary_k_index_1m.json")
	.then(response => response.json())
	.then(data => {
	    console.log("K-Index Data: ", data, "\n", "Date Retrieved: ", data[data.length -1]["time_tag"], "\n", "K-Index: ", data[data.length - 1]["kp_index"]);
	    var date_k_index_selector = document.querySelector("#date_k_index_selector");	    
	    var k_index_selector = document.querySelector("#k_index_selector");
	    date_k_index_selector.innerText = "Date K Index Taken: " + data[data.length - 1]["time_tag"];
	    k_index_selector.innerText = "K Index (Determines Geomagnetic Condition): " + data[data.length - 1]["kp_index"];	    
	})
	     
    // Discovery Based JSON Data Location:
    // https://services.swpc.noaa.gov/json/dscovr/dscovr_mag_1s.json
    
    // Estimated Planetary K Index (3 hour data) graph from NOAA:
    // https://services.swpc.noaa.gov/images/planetary-k-index.gif
});

// Callsign Recorder AngularJS App:
angular.module("callsign_recorder_app", [])
    .controller("callsign_list_controller", function() {
	var callsign_list = this;
	callsign_list.callsigns = [
	    // This was an example to show an object with the 'text' key:
	    // {text: "TEST123"}
	];

	callsign_list.addCallsign = function() {
	    console.log("addCallsign() function called");
	    console.log("Adding '" + callsign_list.callsignText + "' to callsign list...");
	    callsign_list.callsigns.push({text:callsign_list.callsignText});
	    callsign_list.callsignText = "";
	};
    });

// React Based Yahoo! Finance Web App:
// Reference:
// https://reactjs.org/docs/add-react-to-a-website.html
const app_container = document.querySelector("#finance_app_container");
const element = "<h1>Hello, world</h1>";

ReactDOM.render(element, app_container);
