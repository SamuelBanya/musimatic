// Check Garfield Start Date and US Acres Date is less than 1990, then change text to green:
var GarfieldStartDate = document.getElementById("JGarfieldStartDate");

var USAcresStartDate = document.getElementById("JUSAcresStartDate");

if (GarfieldStartDate.textContent < 1990) {
    GarfieldStartDate.style.color = "green";
    GarfieldStartDate.style.fontWeight = "bold";
    console.log("Garfield's start date is less than 1990, turning text green.");
}

if (USAcresStartDate.textContent < 1990) {
    USAcresStartDate.style.color = "green";
    USAcresStartDate.style.fontWeight = "bold";
    console.log("The start date for U.S. Acres is less than 1990, turning text green.");
}

var DOMBody = document.body.textContent;

var strDOMBody = DOMBody.toString();

var lenJimDavis = "Jim Davis".length; 

if (strDOMBody.includes("Jim Davis" && "Garfield")) {
    var startPosJimDavis = strDOMBody.indexOf('Jim Davis');
    var endPosJimDavis = startPosJimDavis + lenJimDavis;

    var lenJimDavisField = document.getElementById("JLenJimDavis");
    lenJimDavisField.textContent = lenJimDavis;

    var firstCharJimDavisField = document.getElementById("JFirstCharJimDavis");
    firstCharJimDavisField.textContent = startPosJimDavis;

    var endingCharJimDavisField = document.getElementById("JEndingCharJimDavis");
    endingCharJimDavisField.textContent = endPosJimDavis; 
} 
