// Adding event listener portion for Materialize drop down menu

// The documentation for the event listener required for the drop down menu isn't that great, so I borrowed ideas from this StackOverflow post:
// https://stackoverflow.com/questions/50475388/dropdown-menu-for-materialize-not-working
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    for (var i = 0; i < elems.length; i++) {
	M.Dropdown.init(elems[i]);
    }
});

// Using Form Events - p.283

// The HTML code from the book for this example can be found here:
// view-source:http://javascriptbook.com/code/c06/form.html

// The JS code from the book for this example can be found here:
// http://javascriptbook.com/code/c06/js/form.js

// the related checkbox documentation in the Materialize library

var elForm, elPriceDropdownMenu, elDonationHint, elDonationTerms, elTermsHint;
elForm = document.getElementById("VDonateForm");
elPriceDropdownMenu = document.getElementById("VPriceDropdownMenu");
elDonationHint = document.getElementById("VDonationHint");
elDonationTerms = document.getElementById("VDonationTerms");
elTermsHint = document.getElementById("VTermsHint");

function dropdownMenuHint() {
    var link = this.options[this.selectedIndex].value;
    if (link == 'monthly') {
	elDonationHint.innerHTML = "Save $10 if you pay for 1 year!";
    } else {
	elDonationHint.innerHTML = "Wise choice!";
    }
}

function checkTerms(event) {
    if (!elDonationTerms.checked) {
	elTermsHint.innerHTML = "You must agree to the terms.";
	event.preventDefault();
    }
}

// Create event listeners:
// Submit event calls checkTerms()
// Change event calls dropdownMenuHint()
elForm.addEventListener("submit", checkTerms, false);
elPriceDropdownMenu.addEventListener("change", dropdownMenuHint, false);

// Using Mutation Events

// NOTE: Mutation Events has been deprecated, so I have to use Mutation Observers instead

// Mutation Observers MDN Docs:
// Docs

/*
var VVimProList, addLink, newEl, newText, counter, listItems;

VimProList = document.getElementById("VVimProList");
addLink = document.getElementById("VVimProAddLink");
VimProCounter = document.getElementById("VVimProCounter");

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement("li");
    newText = document.createTextNode("New list item");
    newEl.appendChild(newText);
    VimProList.appendChild(newEl);
}

function updateCount() {
    listItems = VVimProList.getElementsByTagName("li").length;
    VimProCounter.innerHTML = listItems;
}

addLink.addEventListener("click", addItem, false);

VimProList.addEventListener("DOMNodeInserted", updateCount, false);

*/

// Mutation Observer Example (adapted from book plus MDN docs):

// TODO: This event example only fires once, debug why that's the case:

var VimProList, newEl, newText, addLink, VVimProCounter;

VimProList = document.getElementById("VVimProList");

VimProAddButton = document.getElementById("VVimProAddButton");

VimProCounter = document.getElementById("VVimProCounter");

const mutationConfig = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
	if (mutation.type == 'childList') {
	    console.log("A child node has been added or removed.");
	}
	else if (mutation.type === "attributes") {
	    console.log("The " + mutation.attributeName + " attribute was modified.");
	}
    }
};

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement("li");
    newEl.className = "collection-item";
    newText = document.createTextNode("Yet ANOTHER reason why Vim is better than Emacs!");
    newEl.appendChild(newText);
    VimProList.appendChild(newEl);
    // Exclude the first list item as it is just the counter of list items present:
    listItems = VimProList.getElementsByTagName("li").length - 1;
    VimProCounter.innerHTML = "Counter: " + listItems;
}

VimProAddButton.addEventListener("click", addItem, false);
const observer = new MutationObserver(callback);
observer.observe(VimProList, mutationConfig);

// Using HTML5 Events - p.287

function lookForUserInput() {
    var VimOpinionFormInput = document.getElementById("VVimOpinionFormInput");
    VimOpinionFormInput.focus();
}

window.addEventListener("DOMContentLoaded", lookForUserInput, false);

window.addEventListener("beforeunload", function(event) {
    var message = "You haven't filled out your opinion about Vim near the bottom of the page...";
    (event || window.event).returnValue = message;
    return message;
});
