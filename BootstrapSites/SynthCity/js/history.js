// Using .html() Filter
$(document).ready(function(){
    $("#html-button").click(function grabHTMLFromHeader(){
	console.log("grabHTMLFromHeader() function called");
	var trautoniumHeaderText = $("#trautonium-header").text()
	var resultDiv = $("#html-result");
	resultDiv.html(trautoniumHeaderText);
    });
});

// Using .text() Filter:
$(document).ready(function(){
    $("#change-page-controls-title").click(function changePageControlsTitle(){
	console.log("changePageControlsTitle() function called");
	var pageControlsHeaderText = $("#page-controls-header").text();
	var textResultDiv = $("#text-result");
	textResultDiv.html(pageControlsHeaderText);
    });
});

// Using .replaceWith() Filter:
$(document).ready(function(){
    $("#replace-with-button").click(function replaceHistoryHeaderText(){
	console.log("replaceHistoryHeaderText() function called");
	var historyHeader = $("#history-header");
	historyHeader.replaceWith("<h2>Cool Page</h2>");
    });
});

// Using .remove() Filter:
$(document).ready(function(){
    $("#remove-button").click(function removeHistoryHeader(){
	console.log("removeHistoryHeader() function called");
	var historyHeader = $("#history-header");
	historyHeader.remove();
    })
});

// Elements Based Filters:
// Using .before() Filter:
$(document).ready(function(){
    $("#before-button").click(function createBeforeParagraph(){
	console.log("createBeforeParagraph() function called");
	var middleParagraph = $("#middle-paragraph");
	middleParagraph.before('<p style="color:red">Cool Red Element</p>');
    });
});

// Using .after() filter:
$(document).ready(function(){
    $("#after-button").click(function createAfterParagraph(){
	console.log("createAfterParagraph() function called");
	var middleParagraph = $("#middle-paragraph");
	middleParagraph.after('<p style="color:blue">Cool Blue Element</p>');
    });
});

// Using .prepend() filter:
$(document).ready(function(){
    $("#prepend-button").click(function createPrependParagraph(){
	console.log("createPrependParagraph() function called");
	var figureDivClass = $(".figure-div");
	figureDivClass.prepend('<p style="color:green; background-color: black">New Black And Green Element</p>');
    });
});

// Using .append() button
$(document).ready(function(){
    $("append-button").click(function createAppendParagraph(){
	console.log("createAppendParagraphButton() function called");
	var middleParagraph = $("#middle-paragraph");
	middleParagraph.append('<p style="color:blue; background-color: red">New Blue And Red Element</p>');
    });
});

// Using .clone() filter:
$(document).ready(function(){
    $("#clone-button").click(function cloneFigureDiv(){
	console.log("cloneFigureDiv() function called");
	var figureDiv = $(".figure-div");
	figureDiv.clone().appendTo(figureDiv);
    });
});

// Using .unwrap() filter:
$(document).ready(function(){
    $("#unwrap-button").click(function unwrapFigureDivElements(){
	console.log("unwrapFigureDivElements() function called");
	var figureElements = $("figure");
	figureElements.unwrap();
    });
});

// Using .detach() filter:
$(document).ready(function(){
    $("#detach-button").click(function detachParagraphElements(){
	console.log("detachParagraphElements() function called")
	var paragraphElements = $("p");
	paragraphElements.detach();
    });
});

// Using .empty() filter:
$(document).ready(function(){
    $("#empty-button").click(function emptyTelharmoniumHeader(){
	console.log("emptyTelharmoniumHeader() function called");
	var telharmoniumHeader = $("#telharmonium-header");
	telharmoniumHeader.empty();
    })
});

// Using .add() filter:
$(document).ready(function(){
    $("#add-button").click(function addRedTextParagraphToTelharmoniumHeader(){
	console.log("addRedTextParagraphToTelharmoniumHeader() function called");
	var telharmoniumHeader = $("#telharmonium-header");
	telharmoniumHeader.add("<p id='cool-paragraph'>The Coolest One</p>").css("background-color", "red" );
    });
});

// Using .attr() filter:
$(document).ready(function(){
    $("#attr-button").click(function placeAttrButtonIntoDiv(){
	console.log("placeAttrButtonIntoDiv() function called");
	var attrButton = $("#attr-button");
	var attrButtonResultsDiv = $("#attr-button-results");
	attrButtonResultsDiv.text("ID attribute of attr-button: " + attrButtonResultsDiv.attr("id"));
    });
});

// Using .removeAttr() filter:
$(document).ready(function(){
    $("#remove-attr").click(function removeIdAttribute(){
	console.log("removeIdAttribute() function called");
	var removeAttrButton = $("#remove-attr");
	removeAttrButton.removeAttr("id");
    });
});

// .addClass() filter:
$(document).ready(function(){
    $("#add-class").click(function addClassToButton(){
	console.log("addClassToButton() function called");
	var addClassButton = $("#add-class");
	addClassButton.addClass("red-button-class");
    });
});

// .removeClass() filter:
$(document).ready(function(){
    $("#remove-class").click(function removeClassFromButton(){
	console.log("removeClassFromButton() function called");
	var removeClassButton = $("#remove-class");
	removeClassButton.removeClass("blue-button-class");
    });
});

// .css() filter:
$(document).ready(function(){
    $("#change-css").click(function changeCssFunction(){
	console.log("changeCssFunction called");
	var changeCssButton = $("#change-css");
	// If you need to change more than one css property of an HTML element,
	// you need to use {} brackets to access the object properties:
	changeCssButton.css({"background-color": "black", "color": "yellow"});
    });
});

// .val() filter:
$(document).ready(function(){
    $("#val-button").click(function findValueOfExpensiveSynthQuestion(){
	console.log("findValueOfExpensiveSynthQuestion() function called");
	var mostExpensiveSelectElementValue = $("#most-expensive-synth").val();
	console.log("mostExpensiveSelectElementValue = " + mostExpensiveSelectElementValue);
	var valButton = $("#val-button");
	valButton.text(mostExpensiveSelectElementValue);
    });
});

// Using $.isNumeric() JQuery filter
$(document).ready(function(){
    $("#is-numeric-button").click(function checkMoneyQuestion(){
	console.log("checkMoneyQuestion() function called");
	var moneyForSynth = $("#money-for-synth");
	var isNumericButton = $("#is-numeric-button");
	if ($.isNumeric(moneyForSynth.val())){
	    isNumericButton.css({"background-color": "black", "color": "red"});
	}
    });
});

// Continue with Finding Elements filters on p.304
