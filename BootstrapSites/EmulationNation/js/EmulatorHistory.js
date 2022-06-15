// Methods that return a single element node:
var firstItem = document.getElementById("HFirstItem");

firstItem.textContent = "1941: The first computer, the Colossus, was used by the British government to mimic the functions of the Nazi Enigma code machine.";

// This will obtain the first item from the HHeader class:
var historyHeader = document.querySelector("h1.HHeader");

historyHeader.textContent = "History";

// Methods that return one or more elements (as a nodelist):
var headers = document.getElementsByClassName("HHeader");

var i;

for (i = 0; i < headers.length; i++) {
    headers[i].style.color = "red";
}

// Make the year of each list item have a green font color:
var listItems = document.getElementsByClassName("HEmulatorHistoryListItem");

for (var i = 0; i < listItems.length; i++) {
	var liInnerHTML = new String(listItems[i].innerHTML);
	var yearSlice = liInnerHTML.substr(0, 4);
	var spanYearSlice = "<span style=\"color:green\">" + yearSlice + "</span>";
	var remainingSlice = liInnerHTML.substr(4, liInnerHTML.length);
	var completeItem = spanYearSlice + remainingSlice;
	listItems[i].innerHTML = completeItem;
}

// Obtain all <p> tags on page and change their font color to blue:
var paragraphElements = document.getElementsByTagName("p");

for (var i = 0; i < paragraphElements.length; i++) {
	paragraphElements[i].style.color = "blue";
	// use .className attribute to change the class of paragraph elements to be class="bluePClass"
	paragraphElements[i].className = "blueClass";
}

// Use querySelectorAll() to hone in on the description header, and change its color to yellow
var descriptionHeaders = document.querySelectorAll("h3.HDescriptionHeader");

for (var i = 0; i < descriptionHeaders.length; i++) {
	descriptionHeaders[i].style.color = "yellow";
}

// Use querySelectorAll() to obtain the <p> tags with an id attribute and make them bold:
var paragraphElementsWithIDs = document.querySelectorAll("p[id]");

for (var i = 0; i < paragraphElementsWithIDs.length; i++) {
	paragraphElementsWithIDs[i].style.fontWeight = "bold";
}

// Store The Nodelist Of All <li> Items With The Class, "HSources":
var elements = document.getElementsByClassName("HSources");

// Select First Element From Elements Nodelist Using The item() Method:
if (elements.length >= 1) {
	var firstItem = elements.item(0);
	firstItem.style.color = "purple";
}

// Select Second Element From Elements Nodelist Using The Array Syntax:

if (elements.length >= 1) {
	var secondItem = elements[1];
	secondItem.style.color = "yellow";
}

// Loop Through The Entire elements Nodelist:
var sources = document.querySelectorAll("li.HSources");

for (var i = 0; i < sources.length; i++) {
	sources[i].style.fontStyle = "italic";
}

