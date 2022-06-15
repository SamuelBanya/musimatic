// Load Event from p.273
function setup() {
    var elAnswer;
    elAnswer = document.getElementById('elAnswer');
    elAnswer.focus();
}

// This adds an event listener that will only run on the page load action:
window.addEventListener('load', setup, false);

// Check the answer from above, and display the status within the related tag:
var elAnswer = document.getElementById("elAnswer");
var elStatus = document.getElementById("elStatus");

function checkEmacsYearAnswer() {
    if (elAnswer.value.length < 1) {
	elStatus.textContent = "Status: At least enter something, please!";
    }
    else if (elAnswer.value == "1976") {
	elStatus.textContent = "Status: Yes, you are correct!";
    }
    else {
	elStatus.textContent = "Keep trying!";
    }
}

elAnswer.addEventListener("blur", checkEmacsYearAnswer, false);

// Focus & Blur - p.275
function checkEmacsCustomizationAnswer() {
    var answer = el.value;
    if (answer.length < 5) {
	elStatus2.className = 'warning';
	elStatus2.textContent = 'Not long enough, yet...';
    } else {
	elStatus2.textContent = "";
    }
}

function tipUsername() {
    elStatus2.className = "tip";
    elStatus2.innerHTML = "Username must be at least 5 characters";
}

var el = document.getElementById("elAnswer2");
var elStatus2 = document.getElementById("elStatus2");

// Add focus and blur event listeners:
el.addEventListener("focus", tipUsername, false);
el.addEventListener("blur", checkEmacsCustomizationAnswer, false);

// Click Event - p. 276
var msg = "<div class=\"header\"><button id=\"close\">Close This Message (Shield My Eyes From This Vim Using Heathen)</button></div>";
msg += "<figure><img id='ESpacemacs' src='images/Spacemacs.png'/><br /><figcaption>Spacemacs with Powerline enabled</figcaption></figure>";
msg += "<div><h3>But There Are Alternatives</h3>";
msg += "Note that although Emacs might not be as good a Vim or vice-versa, there are options.";
msg += "<br /><br />Check out <a href='http://spacemacs.org/'>Spacemacs</a> or <a href='https://www.emacswiki.org/emacs/Evil'>Evil Mode</a> if you can't give up Vim.</div>";

// Create the <div> tag
var elNote = document.createElement("div");
elNote.setAttribute("id", "note");
elNote.innerHTML = msg;
vimNote = document.getElementById("EVimNote");
vimNote.append(elNote);

function dismissNote() {
    // Remove the note
    vimNote.removeChild(elNote);
}

var elClose = document.getElementById("close");
elClose.addEventListener("click", dismissNote, false);

// Determining Position - p. 279
// TODO: Debug this issue since its not appearing on the site
var Esx = document.getElementById("Esx");
var Esy = document.getElementById("Esy");
var Epx = document.getElementById("Epx");
var Epy = document.getElementById("Epy");
var Ecx = document.getElementById("Ecx");
var Ecy = document.getElementById("Ecy");

function showPosition(event) {
    Esx.value = event.screenX;
    Esy.value = event.screenY;
    Epx.value = event.pageX;
    Epy.value = event.pageY;
    Ecx.value = event.clientX;
    Ecy.value = event.clientY;
}

var el = document.getElementById("EBody");
el.addEventListener("mousemove", showPosition, false);

// Which Key Was Pressed - p. 281
var message;

function charCount(e) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById("EMessage").value;
    charDisplay = document.getElementById("ECharactersLeft");
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter + " characters left";

    ASCIIKey = document.getElementById("EASCIIKey");
    ASCIIKey.textContent = "Last key in ASCII code: " + e.keyCode;

    exactKey = document.getElementById("EExactKey");
    exactKey.textContent = "Last exact key using String.fromCharCode(event.keyCode): " + String.fromCharCode(event.keyCode);
}

message = document.getElementById("EMessage");
message.addEventListener("keyup", charCount, false);
