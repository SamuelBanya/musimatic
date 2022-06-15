// Using DOM Event Handlers: p.253

function checkAnswer() {
    var elStatus = document.getElementById("elStatus");
    if (this.value.length < 1) {
        elStatus.textContent = "Status: At least enter something!";
    } else if (this.value == "Vim") {
        elStatus.textContent = "Status: You are correct!";
    } else if (this.value == "Emacs") {
        elStatus.textContent = "Status: You are almost correct!";
    } else {
        elStatus.textContent = "Status: You are unique, but incorrect!";
    }
}

var elAnswer = document.getElementById("elAnswer");
elAnswer.onblur = checkAnswer;

// Using Event Listeners: p. 255

function checkAnswer2() {
    var elStatus2 = document.getElementById("elStatus2");
    if (this.value.length < 1) {
        elStatus2.textContent = "Status: At least enter something, geez!";
    } else if (this.value == "No way, Vim is the best!") {
        elStatus2.textContent = "Status: You are correct!";
    } else {
        elStatus2.textContent = "Uhuh, please keep lying to yourself that Vim isn't the best text editor.";
    }
}

var elAnswer2 = document.getElementById("elAnswer2");
// "blur" in this case is used instead of "onblur" action because we are using an event listener instead
// The ommission of the parentheses for checkAnswer2() here is because we want this event to occur as the page
// loads
elAnswer2.addEventListener("blur", checkAnswer2, false);
// If we want to remove this event listener, we would call the method .removeEventListener()

// Using Parameters With Event Handlers & Listeners - p. 256
// The following function(){} is an anonymous function since we want to provide input to the 
// checkLength() function
// In this case, I am going to provide it 10 as the value to make sure it at least has 10
// characters present
function checkLengthAndContent(answerContent, answerLength) {
    var elStatus3 = document.getElementById("elStatus3");
    if (answerLength < 4) {
        elStatus3.textContent = "Not enough characters!";
    }
    else if (answerLength == 4) {
        elStatus3.textContent = "Just enough characters!";
        if (answerContent == "Bram" || answerContent == "bram") {
            elStatus3.textContent = "You are absolutely correct! Good job!";
        }
        else {
            elStatus3.textContent = "Not quite! That's the same amount of characters though, so keep trying! Hint: His name rhymes with 'Flam'";
        }
    }
    else {
        elStatus3.textContent = "Woah, you're going overboard! Too many characters!";
    }
}

elAnswer3.addEventListener("blur", function() {
    var elAnswer3 = document.getElementById("elAnswer3");
    var answerContent = elAnswer3.value;
    var answerLength = elAnswer3.value.length;
    console.log("answerContent = " + answerContent);
    console.log("answerLength = " + answerLength);
    checkLengthAndContent(answerContent, answerLength);
}, false);

// Using Parameters With Event Listeners - p. 257
var elAnswer4 = document.getElementById("elAnswer4");
var elStatus4 = document.getElementById("elStatus4");

function checkEmacsCreatorAnswer(minLength) {
    if (elAnswer4.value.length < minLength) {
        elStatus4.textContent = "Status: Answer must be " + minLength + " characters or more";
    } else {
        elStatus4.innerHTML = "Status: Character Length Met";
    }
}

// The final parameter in the .addEventListener() function allows you two values;
// true: capturing phase (from least specific Document, to most specific node)
// false: bubbling phase (from most specific node outward to Document)
elAnswer4.addEventListener("blur", function() {
    var minLength = 7;	
    checkEmacsCreatorAnswer(minLength);
}, false)

// Event Listener With No Parameters - p.263
function checkFirstTextEditorText(e) {
    var target = e.target;
    console.log("Target = " + target);
}

var elAnswer5 = document.getElementById("elAnswer5");
elAnswer5.addEventListener("blur", checkFirstTextEditorText, false);

function checkFontAnswer(e, minLength) {
    var target = e.target;
    console.log("target = " + target);
    if (elAnswer6.value.length < minLength) {
        elStatus6.textContent = "Status: Answer must be greater than 5 characters!";
    }
    else {
        elStatus6.textContent = "Status: Wonderful, thanks for answering!"; 
    }
    if (elAnswer6.value == "Comic Sans") {
        elStatus6.textContent = "Status: Very funny, you must be the life of the party!";
    }
}

// Event Listener With Parameters - p.263

var elAnswer6 = document.getElementById("elAnswer6");
var elStatus6 = document.getElementById("elStatus6");

elAnswer6.addEventListener("blur", function(e) {
    checkFontAnswer(e, 5);
}, false);

// Using Event Listeners With The Event Object - p.265

function checkColorAnswerLength(e, minLength) {
    
    // The following section of code from the book doesn't appear to work for some reason
    /*
    var el, elMsg;
    el = e.target;
    elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        elMsg.innerHTML = "Color answer must be " + minLength + " characters or more";
    } else {
        elMsg.innerHTML = "TEST";
    }
    */
    
    // Rewritten code to compensate for the e.target not working in the previous case:
    if (elAnswer7.value.length < minLength) {
        elStatus7.textContent = "Status: Color answer length must be " + minLength + " characters or more";
    } else {
        elStatus7.textContent = "";
    }
}

var elAnswer7 = document.getElementById("elAnswer7");
var elStatus7 = document.getElementById("elStatus7");

// if (elAnswer7.addEventListener) {
elAnswer7.addEventListener("blur", function(e) {
    checkColorAnswerLength(e, 5);
}, false);
// } 

// Using Event Delegation p.269
function getTarget(e) {
    if (!e) {
	e = window.event;
    }
    return e.target
}

function itemDone(e) {
    // Remove item from the list
    var target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);


// Prevent the link from taking you elsewhere:
    if (e.preventDefault) {
	e.preventDefault();
    } else {
	e.returnValue = false;
    }
}

// Set up event listeners to call itemDone() on click event:
var elTextEditorList = document.getElementById("textEditorList");

if (elTextEditorList) {
    elTextEditorList.addEventListener("click", function(e) {
	itemDone(e);
    }, false);
} else {
    elTextEditorList.attachEvent("onclick", function(e) {
	itemDone(e);
    });
}
