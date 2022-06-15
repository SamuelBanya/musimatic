// From Loading HTML With AJAX - p.379
var xhr = new XMLHttpRequest();

// From Mozilla:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

xhr.onload = function() {
    // The following conditional check will not work locally - only on a server:
    if(xhr.status === 200) {
        document.getElementById("textfiles_content_div").innerHTML = xhr.responseText;
    }
}

// Prepare the request
xhr.open("GET", "data/anon.ftp", true);

// Send the request
xhr.send(null);
