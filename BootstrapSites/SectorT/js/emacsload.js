// Load Event from p.273
function setup() {
    var elAnswer;
    elAnswer = document.getElementById('elAnswer');
    elAnswer.focus();
}

// This adds an event listener that will only run on the page load action:
window.addEventListener('load', setup, false);
