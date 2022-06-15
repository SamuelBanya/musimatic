var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = "";
        for (var i = 0; i < responseObject.events.length; i++) {
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map +'" ';
            newContent += 'alt="' + responseObject.events[i].location + '" />';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

        document.getElementById("events_json_div").innerHTML = newContent;
    }


};

// Prepare the request:
xhr.open("GET", "data/events_example.json", true);
// Send the request:
xhr.send(null);
