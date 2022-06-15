var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // The following conditional will NOT work locally, only on a server:
    if (xhr.status === 200) {
        // XML specific part:
        var response = xhr.responseXML;
        var events = response.getElementsByTagName("event");

        for (var i = 0; i < events.length; i++) {
            var container, image, location, city, newline;

            // This is container that will hold all of the XML events inside of it:
            container = document.createElement("div");
            container.className = "event";

            image = document.createElement("img");
            image.setAttribute("src", getNodeValue(events[i], "map"));
            image.setAttribute("alt", getNodeValue(events[i], "location"));
            container.appendChild(image);

            location = document.createElement("p");
            city = document.createElement("b");
            newline = document.createElement("br");
            city.appendChild(document.createTextNode(getNodeValue(events[i], "location")));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            document.getElementById('events_xml_div').appendChild(container);
        }
    }
    function getNodeValue(obj, tag) {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }

};

// Prepare the request:
xhr.open("GET", "data/events_example.xml", true);
// Send the request:
xhr.send(null);
