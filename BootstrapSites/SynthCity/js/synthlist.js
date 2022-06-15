// A Basic JQuery Example - p.299
$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
// I modified this line to include only the ".typical" class
// so that it won't affect other list elements on the same
// page
$('.typical').on('click', function() {
    $(this).remove();
});

// Finding Elements - p.302
// Basic Selectors
// Using the * selector to make everything part of the "bold" CSS class
$(document).ready(function(){
    $("#hide-button").click(function(){
	$("*").hide();
    });
});

// Using the element selector to make everything have yellow text
$(document).ready(function(){
    $("#yellow-text-button").click(function(){
	$("li").addClass("yellow-text");
    });
});

// Using the #id selector to make the synth header flash red
var currentColorList = ["red", "white", "black"]
var index = 0;

$(document).ready(function(){
    $("#flash-red-button").click(function changeHeaderColor(){
	setInterval(function() {
	    // var synthListHeader = document.getElementById("synth-list-header");
	    var synthlistHeader = $("#synth-list-header");
	    console.log("changeHeaderColor() function called");
	    $("#synth-list-header").css({"color": currentColorList[index]});
	    index++;
	    if(index > currentColorList.length - 1){
		index = 0;
	    }
	}, 100);
    });
});

// Using the .class selector to select all <h2> headers with the "bold-header"
// class:
var boldOptionList = ["bold", "normal"];
var boldIndex = 0;

$(document).ready(function(){
    $("#bold-headers-button").click(function changeBoldClassHeaders(){
	setInterval(function(){
	    console.log("changeBoldClassHeaders() function called");
	    var boldHeaders = $(".bold-header");
	    console.log("boldHeaders: " + boldHeaders);
	    console.log("boldIndex: " + boldIndex);
	    $(boldHeaders).css({"font-weight": boldOptionList[boldIndex]});
	    boldIndex++;
	    if(boldIndex > boldOptionList.length - 1) {
		boldIndex = 0;
	    }
	}, 100);
    });
});

// Using multiple selectors separated by commas to select the
// first two synth materials and make their background appear
// green:
var firstTwoMaterials = $("#material-1, #material-2");

firstTwoMaterials.css({"background-color": "green"});

// Hierarchy Selectors

// Using "ancestor descendent" hierarchy selector to select
// <a> elements that are descedents of <li> elements:

$(document).ready(function(){
    $("#red-text-button").click(function changeAnchorsRed(){
	console.log("changeAnchorsRed() function called");
	var anchorsWithinListElements = $("li a");
	$(anchorsWithinListElements).css({"color": "red"});
    });
});

// Using "parent > child" selector to select the first
// <li> element that is a direct child of the parent <ul> element
// have a blue background:

$(document).ready(function(){
    $("#blue-background-button").click(function changeChildListElementBlue(){
	console.log("changeChildListElementBlue() function called");
	var childListElements = $("ul > li");
	$(childListElements).css({"background-color": "blue"});
    });
});

// Using Next Adjacent Selector "previous + next" selector to select elements
// that are immediately followed by the previous HTML element.
// In this example, we are selecting list elements that are immediately
// followed by ul elements

$(document).ready(function(){
    $("#green-background-button").click(function changeAdjacentLinkElementsGreen(){
	console.log("changeAdjacentLinkElementsGreen() function called");
	// This will target the <span> tags right underneath <li> elements:
	var adjacentLinkElements = $("li + a");
	$(adjacentLinkElements).css({"background-color": "green"});
    });
});

// TODO: Fix this section:
// Using "Sibling selector "previous ~ siblings" to select 
$(document).ready(function(){
    $("#red-text-button").click(function changeAnchorsWithinListsRed(){
	console.log("changeAnchorsWithinListsRed() function called");
	var anchorsWithinLists = $("li ~ a");
	$(anchorsWithinLists).css({"color": "red"});
    });
})

// Using :not(selector) to invert all elements other than headers have inverted colors:
$(document).ready(function(){
    $("#invert-elements").click(function invertElementColors(){
	console.log("invertElementColors() function called");
	var h1ElementsOtherThanSynthHeader = $("h1:not(#synth-list-header)");
	$(h1ElementsOtherThanSynthHeader).css({"background-color": "black", "color": "white"});
    });
});

// Using :first filter to select the first list element on the page and make it orange:
$(document).ready(function(){
    $("#orange-first-element").click(function makeFirstElementOrange(){
	console.log("makeFirstElementOrange() function called");
	var firstListElement = $("li:first");
	$(firstListElement).css({"background-color": "orange"});
    });
});

// Using :last filter to select the last list element on the page and make it purple:
$(document).ready(function(){
    $("#purple-last-header").click(function makeHeaderElementPurple(){
	console.log("makeLastHeaderPurple() function called");
	var lastHeader = $("h1:last");
	$(lastHeader).css({"background-color": "purple"});
    });
});

// Using :even filter to select even list elements on the page, and make them flash gold:

var evenColorList = ["blue", "white", "yellow"];
var evenIndex = 0;

$(document).ready(function(){
    $("#even-flashing-list-elements").click(function makeEvenListElementsFlash(){
	setInterval(function(){
	    var evenListElements = $("li:even");
	    console.log("makeEvenListElementsFlash() function called");
	    $(evenListElements).css({"color": evenColorList[evenIndex]});
	    evenIndex++;
	    if(evenIndex > evenColorList.length - 1){
		evenIndex = 0;
	    }
	}, 100);
    });
});

// Using :odd filter to select odd list elements on the page, and make them flash traffic light colors:

var trafficLightColorList = ["red", "yellow", "green"];
var oddIndex = 0;

$(document).ready(function(){
    $("#odd-flashing-list-elements").click(function makeOddListElementsFlashTrafficColors(){
	setInterval(function(){
	    var oddListElements = $("li:odd");
	    console.log("makeOddListElementsFlashTrafficColors() function called");
	    $(oddListElements).css({"color": trafficLightColorList[oddIndex]});
	    oddIndex++;
	    if(oddIndex > trafficLightColorList.length - 1){
		oddIndex = 0;
	    }
	}, 100);
    });
});

// Using :eq(index) filter to pick the fourth list element on the page, and make flash Halloween colors:
var halloweenColorList = ["black", "orange", "red"];
var halloweenIndex = 0;

$(document).ready(function(){
    $("#equal-list-element").click(function makeFourthElementHaveHalloweenColors(){
	setInterval(function(){
	    var fourthListElement = $("li:eq(3)");
	    console.log("makeFourthElementHaveHalloweenColors() function called");
	    $(fourthListElement).css({"background-color": halloweenColorList[halloweenIndex]});
	    halloweenIndex++;
	    if(halloweenIndex > halloweenColorList.length - 1){
		halloweenIndex = 0;
	    }
	}, 100);
    });
});

// Using :gt(index) filter to pick list elements greater than the seventh list element to make them flash LA Lakers colors:

var lakersColorList = ["purple", "yellow", "white"];
var lakersIndex = 0;

$(document).ready(function(){
    $("#greater-list-element").click(function makeListElementsHaveLakersColors(){
	setInterval(function(){
	    var listElementsPastSeventhElement = $("li:gt(6)");
	    console.log("makeListElementsHaveLakersColors() function called");
	    $(listElementsPastSeventhElement).css({"background-color": lakersColorList[lakersIndex]});
	    lakersIndex++;
	    if(lakersIndex > lakersColorList.length - 1){
		lakersIndex = 0;
	    }
	}, 100);
    });
});

// Using :lt(index) filter to pick list elements less than the seventh list element to make them flash Minnesota Wild colors:

var minnesotaWildColorList = ["red", "green", "white"];
var minnesotaIndex = 0;

$(document).ready(function(){
    $("#less-list-element").click(function makeListElementsHaveMinnesotaWildColors(){
	setInterval(function(){
	    var listElementsBeforeSeventhElement = $("li:lt(6)");
	    console.log("makeListElementsHaveMinnesotaWildColors() function called");
	    $(listElementsBeforeSeventhElement).css({"background-color": minnesotaWildColorList[minnesotaIndex]});
	    minnesotaIndex++;
	    if(minnesotaIndex > minnesotaWildColorList.length - 1){
		minnesotaIndex = 0;
	    }
	}, 100);
    });
});

// Using :header filter to pick headers and make them patriotic with red, white, and blue background colors:

var patrioticColorList = ["red", "white", "blue"];
var patrioticIndex = 0;

$(document).ready(function(){
    $("#header-filter").click(function makeHeadersPatriotic(){
	setInterval(function(){
	    var headerElements = $(":header");
	    console.log("makeHeadersPatriotic");
	    $(headerElements).css({"background-color": patrioticColorList[patrioticIndex]});
	    patrioticIndex++;
	    if (patrioticIndex > patrioticColorList.length - 1){
		patrioticIndex = 0;
	    }
	}, 50);
    });
});

// Using .focus() method to shift focus to korg-synth-link anchor tag
$("#focus-element").click(function changeFocusToKorgSynthLink() {
    $("korg-synth-link").focus();
    console.log("changeFocusToKorgSynthLink() function called");
});

// Using :contains('text') to make the "contains-text" button flash red and
// yellow if the favorite-synth-textarea element contains any text
var textareaColorList = ["red", "yellow"];
var textareaIndex = 0;

$(document).ready(function(){
    $("#contains-text").click(function makeTextAreaFlashRedAndYellow(){
	if ($("#favorite-synth-textarea:contains('moog')")){
	    setInterval(function(){
		var favoriteSynthTextarea = $("#favorite-synth-textarea");
		console.log("makeTextAreaFlashRedAndYellow() function called");
		$(favoriteSynthTextarea).css({"background-color": textareaColorList[textareaIndex]});
		textareaIndex++;
		if (textareaIndex > textareaColorList.length - 1){
		    textareaIndex = 0;
		}

	    }, 50);
	}
    });

});

// Using :empty Filter:
$(document).ready(function(){
    $("#empty").click(function makeEmptyElementsHaveBlueBackground(){
	console.log("makeEmptyElementsHaveBlueBackground() function called");
	var emptyElements = $(":empty");
	$(emptyElements).css({"background-color": "blue"});
    });
});

// Using :parent Filter
$(document).ready(function(){
    $("#parent").click(function makeParentElementsHaveGreenText(){
	console.log("makeParentElementsHaveGreenText() function called");
	var parentElements = $(":parent");
	$(parentElements).css({"color": "green"});
    });
});

// Using :has(selector) Filter:
$(document).ready(function(){
    $("#ul-has-li").click(function makeUlElementsHaveBlackBackgroundWithWhiteText(){
	console.log("makeUlElementsHaveBlackBackgroundWithWhiteText() function called");
	var ulElements = $("ul:has(li)");
	$(ulElements).css({"background-color": "black", "color": "white"});
    });
});

// Using :hidden Filter:
$(document).ready(function(){
    $("#hidden").click(function makeHiddenElementsVisible(){
	console.log("makeHiddenElementsVisible() function called");
	var hiddenElements = $(":hidden");
	// Using .show() function to show hidden elements:
	$(hiddenElements).show();
    });
});

// Using :visible filter
$(document).ready(function(){
    $("#visible").click(function makeVisibleElementsHidden(){
	console.log("makeVisibleElementsHidden() function called");
	var visibleElements = $(":visible");
	// Using .show() function to show hidden elements:
	$(visibleElements).hide();
    });
});

// Using :nth-child(expr) Filter:
$(document).ready(function(){
    $("#nth-child").click(function makeEvenElementsHaveRedTextWithBlueBackground(){
	console.log("makeEvenElementsHaveRedTextWithBlueBackground() function called");
	var evenElements = $("li:nth-child(2)");
	$(evenElements).css({"background-color": "blue", "color": "red"});
    });
});

// Using :first-child Filter:
$(document).ready(function(){
    $("#first-child").click(function makeFirstChildElementsHaveYellowText(){
	console.log("makeFirstChildElementsHaveYellowText() function called");
	var firstChildElements = $(":first-child");
	$(firstChildElements).css({"color": "yellow"});
    });
});

// Using :only-child Filter:
$(document).ready(function(){
    $("#only-child").click(function makeOnlyChildElementsHaveBlackBackgroundAndRedText(){
	console.log("makeOnlyChildElementsHaveBlackBackgroundAndRedText() function called");
	var onlyChildElements = $(":only-child");
	$(onlyChildElements).css({"background-color": "black", "color": "red"});
    });
});

// TODO: Debug all of the attribute based filter buttons since the
// syntax is a bit off due to the book's wording:

// Using [attribute] filter:
$(document).ready(function(){
    $("#attribute").click(function makeIdElementsHavePurpleBackgroundAndRedText(){
	console.log("makeIdElementsHavePurpleBackgroundAndRedText() function called");
	var elementsWithIds = $("id");
	$(elementsWithIds).css({"background-color": "purple", "color": "red"});
    });
});

// Using [attribute='value'] Filter
// In this scenario, you would use .(class value)
// but in any other scenario use the attribute value itself,
// Ex: you could use name='value'
$(document).ready(function(){
    $("#class-value").click(function makeElementsWithClassvalueHaveBlueTextAndGreenBackground(){
	console.log("makeElementsWithClassvalueHaveBlueTextAndGreenBackground() function called");
	var elementsWithClassValues = $(".blue-background");
	$(elementsWithClassValues).css({"background-color": "blue", "color": "green"});
    });
});

// Using [attribute!='value'] Filter:
// In this example, I'm using !.blue-background to make it a bit easier:
$(document).ready(function(){
    $("#no-class-value").click(function changeElementsWithoutAClassValue(){
	console.log("changeElementsWithoutAClassValue() function called");
	var elementsWithoutClassValue = $("!.blue-background");
	$(elementsWithoutClassValue).css({"background-color": "red", "color": "yellow"});
    });
});

// Using [attribute^='value'] Filter:
$(document).ready(function(){
    $("#begins-with-id-value").click(function changeElementsThatBeginWithAnId(){
	console.log("changeElementsThatBeginWithAnId() function called");
	var elementsThatBeginWithAnId = $("name^='cool'");
	$(elementsThatBeginWithAnId).css({"color": "purple"});
    });
});

// Using [attribute$='value'] Filter:
$(document).ready(function(){
    $("#ends-with-id-value").click(function changeElementsThatEndWithAnId(){
	console.log("changeElementsThatEndWithAnId() function called");
	var elementsThatEndWithAnId = $("name$='header'");
	$(elementsThatEndWithAnId).css({"background-color": "orange"});
    });
});

// Using [attribute*='value'] Filter:
$(document).ready(function(){
    $("#somewhere-within-id-value").click(function changeElementsWithIdValueSomewherePresent(){
	console.log("changeElementsWithIdValueSomewherePresent() function called");
	var elementsWithIdValueSomewherePresent = $("name*='ool'");
	$(elementsWithIdValueSomewherePresent).css({"background-color": "purple", "color": "white"});
    });
});

// Using [attribute|='value'] Filter:
$(document).ready(function(){
    $("#or-value").click(function changeElementsThatHaveAValueOrAnother(){
	console.log("changeElementsThatHaveAValueOrAnother() function called");
	var elementsThatHaveAValueOrAnother = $("name|='cool-header'");
	$(elementsThatHaveAValueOrAnother).css({"background-color": "black", "color": "green"});
    });
});

// Using [attribute~='value'] Filter:
$(document).ready(function(){
    $("#equal-to-list-value").click(function changeElementsThatAreInList(){
	console.log("changeElementsThatAreInList() function called");
	var elementsThatAreInlist = $("name~='cool-header really-cool-header'");
	$(elementsThatAreInlist).css({"background-color": "black", "color": "purple"});
    });
});

// Using [attribute][attribute2] Filter:
$(document).ready(function(){
    $("#match-multiple-selectors").click(function changeElementsThatMatchMultipleAttributeValues(){
	console.log("changeElementsThatMatchMultipleAttributeValues() function called");
	var elementsThatMatchMultipleAttributeValues = $("name='really-cool-header' .blue-background");
	$(elementsThatMatchMultipleAttributeValues).css({"background-color": "purple", "color": "green"});
    });
});

// Form Based Selectors:

// Using :input Filter:
$(document).ready(function(){
    $("#input").click(function changeinputElements(){
	console.log("changeinputElements() function called");
	var inputElements = $(":input");
	$(inputElements).css({"background-color": "black", "color": "blue"});
    });
});

// Using :text filter:
$(document).ready(function(){
    $("#text").click(function changeTextElements(){
	console.log("changeTextElements() function called");
	var textElements = $(":text");
	$(textElements).css({"background-color": "black", "color": "red"});
    });
});

// Using :password Filter:
$(document).ready(function(){
    $("#password").click(function changePasswordElements(){
	console.log("changePasswordElements() function called");
	var passwordElements = $(":password");
	$(passwordElements).css({"background-color": "black", "color": "green"});
    });
});

// Using :radio Filter:
$(document).ready(function(){
    $("#radio").click(function changeRadioElements(){
	console.log("changeRadioElements() function called");
	var radioElements = $(":radio");
	$(radioElements).css({"background-color": "yellow", "color": "red"});
    });
});

// Using :checkbox Filter:
$(document).ready(function(){
    $("#checkbox").click(function changeCheckboxElements(){
	console.log("changeCheckboxElements() function called");
	var checkboxElements = $(":checkbox");
	$(checkboxElements).css({"background-color": "yellow", "color": "blue"});
    });
});

// Using :submit Filter:
$(document).ready(function(){
    $("#submit").click(function changeSubmitElements(){
	console.log("changeSubmitElements() function called");
	var submitElements = $(":submit");
	$(submitElements).css({"background-color": "yellow", "color": "green"});
    });
});

// using :image Filter:
$(document).ready(function(){
    $("#image").click(function changeImageElements(){
	console.log("changeImageElements() function called");
	var imageElements = $(":image");
	$(imageElements).css({"background-color": "red", "color": "black"});
    });
});

// Using :reset Filter:
$(document).ready(function(){
    $("#reset").click(function changeResetElements(){
	console.log("changeResetElements() function called");
	var resetElements = $(":reset");
	$(resetElements).css({"background-color": "red", "color": "white"});
    });
});

// Using :button Filter:
$(document).ready(function(){
    $("#button").click(function changeButtonElements(){
	console.log("changeButtonElements() function called");
	var buttonElements = $(":button");
	$(buttonElements).css({"background-color": "red", "color": "blue"});
    });
});

// Using :file Filter:
$(document).ready(function(){
    $("#file").click(function changeFileElements(){
	console.log("changeFileElements() function called");
	var fileElements = $(":file");
	$(fileElements).css({"background-color": "blue", "color": "white"});
    });
});

// Using :selected Filter:
$(document).ready(function(){
    $("#selected").click(function changeSelectedElements(){
	console.log("changeSelectedElements() function called");
	var selectedElements = $(":selected");
	$(selectedElements).css({"background-color": "blue", "color": "orange"});
    });
});

// Using :enabled Filter:
$(document).ready(function(){
    $("#enabled").click(function changeEnabledElements(){
	console.log("changeEnabledElements() function called");
	var enabledElements = $(":enabled");
	$(enabledElements).css({"background-color": "blue", "color": "red"});
    });
});

// Using :disabled Filter:
$(document).ready(function(){
    $("#disabled").click(function changeDisabledElements(){
	console.log("changeDisabledElements() function called");
	var disabledElements = $(":disabled");
	$(disabledElements).css({"background-color": "orange", "color": "black"});
    });
});

// Using :checked Filter:
$(document).ready(function(){
    $("#checked").click(function changeCheckedElements(){
	console.log("changeCheckedElements() function called");
	var checkedElements = $(":checked");
	$(checkedElements).css({"background-color": "orange", "color": "white"});
    });
});

// Using .html() Filter:
$(document).ready(function(){
    $("#get-html").click(function getHTMLFromHeader() {
	console.log("getHTMLFromHeader() function called");
	var synthMaterialHeaderHTML = $("#synth-material-header").html();
	alert("synthMaterialHeaderHTML: " + synthMaterialHeaderHTML);
    });
});

// Using .text() Filter:
$(document).ready(function(){
    $("#get-text").click(function getTextFromHeader() {
	console.log("getTextFromHeader() function called");
	var synthMaterialHeaderText = $("#synth-material-header").text();
	alert("synthMaterialHeaderText: " + synthMaterialHeaderText);
    });
});

// Using Single Element Selection (p.306):
$(document).ready(function(){
    $("#single-selection-button").click(function getSingleSelection() {
	console.log("getSingleSelection() function called");
	var singleSelection = $(".synth-color-class");
	$(singleSelection).css({"background-color": "blue", "color": "white"});
    });
});

// Using Multiple Element Selection (p.306):
$(document).ready(function() {
    $("#multiple-selection-button").click(function getMultipleSelection() {
	console.log("getMultipleSelection() function called");
	var multipleSelection = $("ul");
	$(multipleSelection).css({"background-color": "red"});
    });
});

// Using Multiple Element Selection With First Index Variation(p.306):
$(document).ready(function() {
    $("#multiple-selection-last-index-button").click(function getMultipleSelectionLastIndex() {
	console.log("getMultipleSelectionLastIndex() function called");
	var multipleSelectionLastIndex = $("ul")[-1];
	$(multipleSelectionLastIndex).css({"background-color": "green"});
    });
});

// .html() method to obtain the first 'li' element on the page - p.307:
$(document).ready(function() {
    $("#get-html-from-first-list-element").click(function getHTMLFromFirstListElement() {
	console.log("getHTMLFromFirstListElement() function called");
	var firstListElementHTML = $("li").html();
	alert('firstListElementHTML: ' + firstListElementHTML);
    });
});

// Using .html() function to set information - p.307:
$(document).ready(function() {
    $("#update-all-list-elements").click(function updateAllListElements() {
	console.log("updateAllListElement() function called");
	var listElements = $("li");
	listElements.html("Updated!");
    });
});

// Using JQuery's Looping To Add A "Seasonal" And "Favorite" Class To Change Styling
// Via The Related .css Stylesheet - p.310:
$(document).ready(function() {
    $("#update-list-elements-with-seasonal-colors").click(function updateListElementsWithSeasonalColors() {
	console.log("updateListElementsWithSeasonalColors() function called");
	var listElements = $("li");
	listElements.addClass("seasonal");
    });
});

$(document).ready(function() {
    $("#update-list-elements-with-favorite-colors").click(function updateListElementsWithFavoriteColors() {
	console.log("updateListElementsWithFavoriteColors() function called");
	var listElements = $("li");
	listElements.addClass("favorite");
    });
});

// Using Chaining To Chain Multiple Events To Cause List Elements To Fade In And Out On The Page - p.311:
$(document).ready(function() {
    $("#chain-list-element-events-button").click(function chainListElementEvents() {
	console.log("chainListElementEvents() function called");
	var listElements = $("li");
	listElements.hide().delay(500).fadeIn(1400);
    });
});

// Using shorthand for $(document).ready(): $(function() {}); - p.313:
$(function() {
    $("#use-jquery-shorthand").click(function useJQueryShorthand() {
	console.log("useJQueryShorthand() function called");
	var listElements = $("li");
	listElements.css({"color": "red"});
    });
});

// Using .text() filter to get element content - p.314:
$(function() {
    $("#obtain-ul-text").click(function obtainUlText() {
	console.log("obtainUlText() function called");
	var unorderedListElementsText = $("ul").text();
	alert("first ul element's text found with its descendents: " + unorderedListElementsText);
    });
});

// Using .append() method to append html of first instance of 'ul' on page to
// itself using .html() filter - p.315:
$(function() {
    $("#append-html-button").click(function appendHTML() {
	console.log("appendHTML() function called");
	var $listHTML = $("ul").html();
	$("ul").append($listHTML);
    });
});

// Using .append() method to append text of first instance of 'ul' on page
// to itself using .text filter - p.315:
$(function() {
    $("#append-text-button").click(function appendText() {
	console.log("appendText() function called");
	var $listText = $("ul").text();
	$("ul").append("<p>" + $listText + "</p>");
    });
});

// Append italic HTML to end of first instance of 'ul' on page - p.315:
$(function() {
    $("#append-italic-html-button").click(function appendItalicHTML() {
	console.log("appendItalicHTML function called");
	var $listHTML = $("ul").html();
	$("ul").append("<i>" + $listHTML + "</i>");
    });
});

// Append italic text to end of first instance of 'ul' on page - p.315:
$(function() {
    $("#append-italic-text-button").click(function appendItalicText() {
	console.log("appendItalicText() function called");
	var $listText = $("ul").text();
	$("ul").append("<i>" + $listText + "</i>");
    });
});

// Change all button text to italic - p.316:
$(function() {
    $("#change-button-text-to-italic").click(function changeButtonTextToItalic() {
	console.log("changeButtonTextToItalic() function called");
	$("button").html(function() {
	    return "<em>" + $(this).text() + "</em>";
	});
    });
});

// Change button text on page to a different value, and change all ul
// html to italic HTML - p.316:
$(function() {
    $("#change-button-and-ul-content").click(function changeButtonAndUlContent() {
	console.log("changeButtonAndUlContent() function called");
	$(function() {
	    $("button").text("COOL BUTTON CHANGE!");
	    $("ul").html(function() {
		return "<em>" + $(this).text() + "</em>";
	    });
	});
    });
});

// Look for any buttons that contain the word, 'button', and make
// their text appear bold - p.317:
$(function() {
    $("#change-button-that-contains-button").click(function changeButtonThatContainsButton() {
	console.log("changeButtonThatContainsButton() function called");
	var buttons_that_contain_button = $("button:contains('Button')");
	buttons_that_contain_button.html("<strong>" + $(this).text() + "</strong>");
    });
});

// Remove the list elements on the page - p.317:
$(function() {
    $("#remove-list-elements-button").click(function removeListElements() {
	console.log("removeListElements() function called");
	var list_elements = $("li");
	list_elements.remove();
    });
});

// Using ".before()" method to add a <h1> header before all <ul> elements on the page - p.319:
$(function() {
    $("#before-button").click(function addHeaderBeforeUlElements() {
	console.log("addHeaderBeforeUlElements() function called");
	var ul_elements = $("ul");
	var header_fragment = $("<strong><h1>GIANT INJECTED HEADER!</h1></strong>");
	ul_elements.before(header_fragment);
    });
});

// Using ".prepend()" method to add a <h2> header after all <h1> elements on the page - p.319:
$(function() {
    $("#prepend-button").click(function prependH1HeaderWithH2Header() {
	console.log("prependH1HeaderWithH2Header() function called");
	var h1_elements = $("h1");
	var header_fragment = $("<i><h2>ITALIC INJECTED H2 HEADER!</h2></i>");
	h1_elements.prepend(header_fragment);
    });
});

// Second example of using ".prepend()" method to add a '+' sign to each list element on the page - p.319:
$(function() {
    $("#prepend-2-button").click(function addPlusSignsWithPrependMethod() {
	console.log("addPlusSignsWithPrependMethod");
	var li_elements = $("li");
	var plus_sign_fragment = $("+ ");
	li_elements.prepend(plus_sign_fragment);
    });
});

// Using ".after()" method to inject an image after each header on the page - p.319
$(function() {
    $("#after-button").click(function addImagesToH1Elements() {
	console.log("addImagesToH1Elements() function called");
	var h1_elements = $("h1");
	var img_fragment = $("<img alt='' src='images/Roland Jupiter.jpeg'/>")
	h1_elements.after(img_fragment);
    });
});

// Using .attr() method - p.320:
$(function() {
    $("#attr-button").click(function useAttrMethodToChangeId() {
	console.log("useAttrMethodToChangeId() function called");
	var synthListHeader = $("#synth-list-header");
	synthListHeader.attr("id", "guitar-list-header");
    });
});

// Using .removeAttr() method - p.320:
$(function() {
    $("#remove-attr-button").click(function useRemoveAttrMethodToRemoveId() {
	console.log("useRemoveAttrMethodToRemoveId() function called");
	var synthListHeader = $("#synth-list-header");
	synthListHeader.removeAttr("id");
    });
});

// Using .addClass() method - p.320:
$(function() {
    $("#add-class-button").click(function addClassToSynthListHeader() {
	console.log("addClassToSynthListHeader() function called");
	var synthListHeader = $("#synth-list-header");
	synthListHeader.removeAttr("id");
	synthListHeader.addClass("retro-purple");
    });
});

// Using .removeClass() - p.320:
$(function () {
    $("#remove-class-button").click(function removeClassFromSynthListHeader() {
	console.log("removeClassFromSynthListHeader() function called");
	var synthListHeader = $("#synth-list-header");
	synthListHeader.removeClass("italic");
    });
});

// Using .css() method to get the first list element's background-color CSS property and alert it to the user - p.322
$(function() {
    $("#get-css-first-li-element").click(function alertFirstListElementBackgroundColor() {
	console.log("alertFirstListElementBackgroundColor() function called");
	var first_list_element_background_color = $("li").css('background-color');
	alert("first_list_element_background_color: " + first_list_element_background_color);
    });
});

// Using .css() method to set the 'background-color' of all button elements to black - p.322
$(function() {
    $("#make-button-background-black").click(function makeButtonBackgroundBlack() {
	console.log("makeButtonBackgroundBlack() function called");
	var button_elements = $("button");
	button_elements.css('background-color', 'black');
    });
});

// Using .css() method to increase 'padding-left' css property to increase by 20 pixels - p.322:
$(function() {
    $("#set-h1-left-padding").click(function setH1LeftPadding() {
	console.log("setH1LeftPadding() function called");
	var h1_elements = $("h1");
	h1_elements.css("padding-left", "+=20");
    });
});

// Using .css() method with object bracket notation to set multiple css properties - p.322:
$(function() {
    $("#set-multiple-css-properties-button").click(function setMultipleCSSProperties() {
	console.log("setMultipleCSSProperties() function called");
	var button_elements = $("button");
	button_elements.css({"background-color": "black", "color": "white", "font-family": "Courier", "border": "5px solid red"});
    });
});

// Using .each() method to change each list element on the page's CSS properties - p.324:
$(function() {
    $("#use-each-method-button").click(function useEachMethodToChangeListItems() {
	console.log("useEachMethodToChangeListItems() method called");
	var li_elements = $("li");
	li_elements.each(function() {
	    var ids = this.id;
	    $(this).append("<em class='coca-cola'>" + ids + "</em>");
	});
    });
});

// Using .on() event method to append a <span> tag to each list element on the page - p.327:
$(function () {
    var ids = '';
    var li_elements = $("li");

    $("#using-on-method-button").on("click", function() {
	$(li_elements).on("mouseover click", function() {
	    ids = this.id;
	    li_elements.append("<span class='green-term-colors'>" + ids + "</span>");
	});
	
	$(li_elements).on("mouseout", function() {
	    $(this).children("span").remove();
	});
    });
});

// Using Event Object - p.329
$(function() {
    $("#using-event-object-button").on("click", function() {
	$("li").on("click", function(e) {
	    $("li span").remove();
	    var date = new Date();
	    date.setTime(e.timeStamp);
	    var clicked_timestamp = date.toDateString();
	    $(this).append("<span> " + clicked_timestamp + ": " + e.type + " event " + "</span>");
	});
	
    });
});

// Delegating Events - p.331:
$(function() {
    $("#delegate-multiple-events-button").click(function () {
	$("ul").on("click mouseover", function(e) {
	    $(this).append("Item: " + e.target.textContent + "<br />");
	    $(this).append("Event:" + e.type + "<br />");
	});
    });
});

// Using Hide And Fade In Effects - p. 333:
$(function() {
    $("#using-hide-and-fadein-effects-button").click(function() {
	var li = $("li");
	li.hide().each(function(index) {
	    $(this).delay(700 * index).fadeIn(700);
	});
	li.on("click", function(){
	    $(this).fadeOut(700);
	});
    });
});

// Animating CSS Properties - p.334
$(function() {
    $("#using-animation-button").on("click", function() {
	var li = $("li");
	li.on("click", function() {
	    // We provide {} brackets for what we want to change
	    // Then, we give it a ms amount of time for how
	    // long the animation should be
	    // Then, we provide a call back function at the end
	    $(this).animate({
		opacity: 0.0,
		paddingLeft: "+=80"
	    }, 500, function() {
		$(this).remove();
	    });
	});
    });
});

// Traversing The DOM - p. 337
$(function() {
    $("#traversing-the-dom-button").on("click", function() {
	$("ul").hide();
	var h1_elements = $("h1");

	h1_elements.append("<a>Show UL Elements!</a>");

	h1_elements.on("click", function() {
	    h1_elements.next().fadeIn(500).children(".list-group-item").addClass("complete");
	    h1_elements.find("a").fadeOut();
	});
    });
});

// "Filters In Use" - p.339
$(function() {
    $("#using-filters-button").on("click", function() {
	var list_elements = $("li");
	list_elements.filter(".red-list-item:last").removeClass("red-list-item");
	$("li:not(.red-list-item)").addClass("blue-list-item")
	list_elements.has("em").addClass("green-list-item");

	list_elements.each(function() {
	    var $this = $(this);
	    if ($this.is(".red-list-item")) {
		$this.prepend("Priority item: ");
	    }
	});

	$("li:contains('vintagesynthparts')").append(" (local)");
    });
});

// Using :lt() filter - p.340
$(function() {
    $("#using-lt-method-button").on("click", function() {
        $("li:lt(2)").addClass("blue-class")
    });
});

// Using :eq() filter - p.340
$(function() {
    $("#using-eq-method-button").on("click", function() {
        $("li:eq(0)").addClass("green-class")
    });
});

// Using :gt() filter - p.340
$(function() {
    $("#using-gt-method-button").on("click", function() {
        $("li:gt(2)").addClass("red-class")
    });
});


// Working With Forms - p.344
$(function() {
    var new_item_button = $("#new_item_button");
    var new_item_form = $("#new_item_form");
    // var text_input = $("input:text");
    // My revision to make it simpler:
    var text_input = $("#item_description");

    new_item_button.show();
    new_item_form.hide();

    $("#show_form_button").on("click", function() {
        new_item_button.hide();
        new_item_form.show();
    });

    new_item_form.on("submit", function(e) {
        e.preventDefault();
        // var new_text = text_input.val();
        // My revision since I have a TON of text inputs
        // on that page:
        var new_text = text_input.val();
        // $("li:last").after("<li" + new_text + "</li>");
        // My revision since I have a lot of <ul> lists on that
        // page already:
        $("#last_item_choice").after("<li>" + new_text + "</li>");
        new_item_form.hide();
        new_item_button.show();
        text_input.val("");
    });
});

// Cloning Elements - p.347
$(function() {
    $("#clone_quote_button").on("click", function() {
        var original_quote = $("#original_quote");
        var cloned_quote = original_quote.clone();
        original_quote.remove();
        cloned_quote.insertAfter("#pasted_quote_location");
    });
});

// Detaching And Appending Elements - p.347
$(function() {
    $("#detach_and_append_quote_button").on("click", function(){
        var original_quote = $("#original_quote").detach();
        original_quote.appendTo("#appended_quote_location");
    });
});

// Box Dimensions Of HTML Objects - p.349
$(function() {
    $("#change_box_dimensions_of_synth_material_list").on("click", function(){
        var synth_material_list = $("#synth_material_list");
        var synth_material_list_height = $("#synth_material_list").height();
        var synth_material_list_width = $("#synth_material_list").width();
        synth_material_list.append("<p>Height: " + synth_material_list_height + "px</p>");
        synth_material_list.append("<p>Width: " + synth_material_list_width + "px</p>");
        var list_elements = $("li");
        var material_1 = $("material-1");
        var material_2 = $("material-2");
        list_elements.width("50%");
        material_1.width(125);
        material_2.width("75%");
    });
});

// Page Height - p. 350
$(function() {
    $("#page_height_button").on("click", function() {
        var document_height = $(document).height();
        var page_height_paragraph = $("#page_height_paragraph");
        page_height_paragraph.text("Page Height: " + document_height + "px");
    });
});

// Page Width - p. 350
$(function() {
    $("#page_width_button").on("click", function() {
        var document_width = $(document).width();
        var page_width_paragraph = $("#page_width_paragraph");
        page_width_paragraph.text("Page Width: " + document_width + "px");
    });
});

// Using .offset() - p.351
$(function() {
    $("#offset_button").on("click", function() {
        var left_offset = $("#offset_paragraph").offset().left;
        var top_offset = $("#offset_paragraph").offset().top;
        $("#offset_paragraph").text("Left Offset: " + left_offset + "px, " + "Top Offset: " + top_offset + "px");
    });
});

// Using .position() - p.351
$(function() {
    $("#position_button").on("click", function() {
        var pos_top = $("#position_paragraph").position().top;
        var pos_left = $("#position_paragraph").position().left;
        $("#position_paragraph").text("Position (Top): " + pos_top + "px, Position (Left): " + pos_left + "px");
    });
});

// Slide Ad Idea to show an ad at the bottom of the page when the user has scrolled to the bottom -p.352
$(function() {
    $("#reveal_slide_ad").on("click", function() {
        var window = $(window);
        var slide_ad = $("#slide_ad");
        var end_zone = $("#footer").offset().top - window.height() - 500;

        window.on("scroll", function() {
            if ((end_zone) < window.scrollTop()) {
                slide_ad.animate({"right": "0px"}, 250);
            }
            else {
                slide_ad.stop(true).animate({"right": "-360px"}, 250);
            }
        });
    });
});
