// Use .previousSibling and .nextSibling to obtain the first and third list item of the table:
var thirdListItem = document.getElementById("CThirdListItem");
var secondListItem = thirdListItem.previousSibling;
var fourthListItem = thirdListItem.nextSibling;

// Change the second and fourth list item to the 'cool' and 'hot' class
secondListItem.className = 'cool';
fourthListItem.className = 'hot';

// Obtain the first and last item of the list using .firstChild and .lastChild:
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// TODO: Figure out why the first and last item aren't being set to the first and last <li> elements:
// Set the class name using the .setAttribute() method:
firstItem["class"] = "boldYellow";
lastItem["class"] = "italicGreen";

console.log("startItem.innerHTML = " + startItem.innerHTML);
console.log("firstItem's class = " + firstItem.class);
console.log("lastItem's class = " + lastItem.class);

// Use .nodeValue to print the text node of the table header # 1 to console:
var emulatorTableHeader1 = document.getElementById("CEmulatorTableHeader1");

console.log("emulatorTableHeader1.firstChild.nextSibling.nodeValue = " + emulatorTableHeader1.firstChild.nextSibling.nodeValue);

// Use .nodeValue to change the text node of the second table header
var emulatorTableHeader2 = document.getElementById("CEmulatorTableHeader2");
var emulatorTableHeader2Text = emulatorTableHeader2.firstChild.nodeValue;
console.log("emulatorTableHeader2Text = " + emulatorTableHeader2Text);

// Use String object's .replace() method:
emulatorTableHeader2Text = emulatorTableHeader2Text.replace("LAME", "Description");
emulatorTableHeader2.firstChild.nodeValue = emulatorTableHeader2Text;

// Use .textContent to access the text content of the third table header:
var emulatorTableHeader3 = document.getElementById("CEmulatorTableHeader3");

emulatorTableHeader3.textContent = "Link";

// Use .innerText to access only the text of the first emulator name:
var emulatorName1 = document.getElementById("CEmulatorName1");

console.log("emulatorName1.innerText = " + emulatorName1.innerText);

// Use .innerHTML to access and update the text and markup of the second emulator name:
var emulatorName2 = document.getElementById("CEmulatorName2");

console.log("emulatorName2.innerHTML = " + emulatorName2.innerHTML);

emulatorName2.innerHTML = "OpenEmu"

console.log("emulatorName2.innerHTML (AFTER CHANGE) = " + emulatorName2.innerHTML);

// Use .innerHTML to update the text & markup by adding an <a> tag to the CEmulatorName1 <td> tag, which has already been declared as emulatorName1:
emulatorName1Content = emulatorName1.innerHTML;
emulatorName1.innerHTML = "<a href='http://www.retroarch.com/'>" + emulatorName1Content + "</a>";

// Do the same .innerHTML replacement <a> idea for the CEmulatorName2 (OpenEmu) and CEmulatorName (MAME):
emulatorName2Content = emulatorName2.innerHTML;
emulatorName2.innerHTML = "<a href='http://openemu.org/'>" + "<b>" + emulatorName2Content + "</b>" + "</a>";

var emulatorName3 = document.getElementById("CEmulatorName3");
emulatorName3Content = emulatorName3.innerHTML;
emulatorName3.innerHTML = "<a href='https://www.mamedev.org/'>" + "<b>" + emulatorName3Content + "</b>" + "</a>";

// Add an element to the DOM Tree by adding a new emulator, RetroPie, to the existing <td> list:
var newEl = document.createElement('li');

// Create a text node:
var newText = document.createTextNode('Accessible on multiple platforms (PC, mobile devices, modded handhelds, etc)');

// Store the text node inside the new element:
newEl.appendChild(newText);

// Find the position where the new element will be added aka the first of the <tr> tags found
var position = document.getElementsByTagName('ul')[1];

// Insert the new element into the position:
position.appendChild(newEl);

// Remove elements from the DOM Tree by creating variables to what you want to remove 
// In this case, we are grabbing all of the list items from an example list we wish to remove form the page, which
// we know are list items index 13 to 15:
var removeEl1 = document.getElementsByTagName('li')[13];
var removeEl2 = document.getElementsByTagName('li')[14];
var removeEl3 = document.getElementsByTagName('li')[15];

// Then, select the parents with .parentNode:

var containerEl1 = removeEl1.parentNode;
var containerEl2 = removeEl2.parentNode;
var containerEl3 = removeEl3.parentNode;

// Then use .removeChild() to remove the child elements:
containerEl1.removeChild(removeEl1);
containerEl2.removeChild(removeEl2);
containerEl3.removeChild(removeEl3);

// Obtain stats from the page using JS:
// Use .hasAttribute to look for the presence of HSources class
var listElements = document.getElementsByTagName("li");
var liClassCount = 0;
var liSourceCount = 0;
var liIDCount = 0;

for (var i = 0; i < listElements.length; i++)
{
	console.log("i = " + i);
	console.log("listElements[" + i + "] = " + listElements[i]);

	if (listElements[i].hasAttribute('class')) {
		liClassCount += 1;	
	}

	if (listElements[i].className == 'CSources') {
		liSourceCount += 1;
	}
	
	if (listElements[i].hasAttribute('id')) {
		liIDCount += 1;
	}
}

// Obtain the CStats1, CStats2, and CStats3 list items:
var CStats1 = document.getElementById("CStats1");

CStats1.innerHTML =  "Count of List Elements With Class Attributes = " + liClassCount + " list elements";

var CStats2 = document.getElementById("CStats2");

CStats2.innerHTML = "Amount of Sources On This Page =  " + liSourceCount + " list elements";

var CStats3 = document.getElementById("CStats3");

CStats3.innerHTML = "Amount of List Elements With ID Attributes = " + liIDCount + " list elements";

// Creating Attribute & Changing Their Values:
// Change the class of the first CStat1 item to be 'blueColorClass', which will turn the text color blue with corresponding CSS present:
CStats1.className = "blueColorClass";

// Change the class of the second CStat2 item to be 'redColorClass', which will turn the text color red with corresponding CSS present:
CStats2.setAttribute("class", "redColorClass");

// Change the class of the third CStat3 item to be 'yellowColorClass', which will turn the text color yellow with corresponding CSS present:
CStats3.setAttribute("class", "yellowColorClass");

// Removing Attributes:
// Check for the presence of the 'class' attribute for the third CStats3 item with an if statement, and then remove it
if (CStats3.hasAttribute("class")) {
	CStats3.removeAttribute("class");
}

// Utilize the DOM (Document Object Model) example from the book by including it as a new third item with the
// use of .insertBefore()
var CStatsList = document.getElementById("CStatsList");

var newFirstItem = document.createElement("li");

// Use a for loop to parse through the available h1 tags:
var H1Tags = document.getElementsByTagName("h1");

var H1ClassCount = 0;

for (var i = 0; i < H1Tags.length; i++) {
	if (H1Tags[i].hasAttribute("class")) {
		H1ClassCount += 1;
	}
}

var newFirstItemText = document.createTextNode("Amount of headers on this page = " + H1ClassCount + " headers");

newFirstItem.appendChild(newFirstItemText);

// Add the newThirdItem as the second to last item by using the .insertBefore() method:
CStatsList.insertBefore(newFirstItem, CStatsList.firstChild);
