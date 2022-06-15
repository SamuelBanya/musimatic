var GarfieldBirthday = document.getElementById("GGarfieldBirthday");

if (GarfieldBirthday.textContent.includes("June")) {
    GarfieldBirthday.style.color = "orange";
    console.log("June text found, color changed");
}

var GarfieldBirthdayYear = document.getElementById("GGarfieldBirthdayYear");

// Using Comparison Operators:
if (GarfieldBirthdayYear.textContent >= 1977) {
    GarfieldBirthdayYear.style.color = "green";
    console.log("Garfield birthday year found, color changed");
}

// Using Local And '&&' Operators:
var GarfieldLike1 = document.getElementById("GGarfieldLike1");
var GarfieldLike2 = document.getElementById("GGarfieldLike2");

if (GarfieldLike1.textContent == "Lasagna" && GarfieldLike2.textContent == "Pizza") {
    GarfieldLike1.style.color = "red";
    GarfieldLike2.style.color = "red";
}

var GarfieldDislike1 = document.getElementById("GGarfieldDislike1");
var GarfieldDislike2 = document.getElementById("GGarfieldDislike2");
var GarfieldDislike3 = document.getElementById("GGarfieldDislike3");

var colorList = ["red", "white", "blue"];
var index = 0;
var dislikesPresent = false;

// Using Local Or '||' Operators:
// if ((GarfieldDislike1.textContent == "Mondays" && GarfieldDislike2.textContent == "Mondays") || GarfieldDislike3.textContent == "Nermal") {
if (GarfieldDislike1.textContent == "Mondays" || GarfieldDislike3.textContent == "Nermal") {
    dislikesPresent = true;
    if (dislikesPresent != false) {
        GarfieldDislike1.style.fontStyle = "italic";
        GarfieldDislike2.style.fontStyle = "italic";
        GarfieldDislike3.style.fontStyle = "italic";
    }
    GarfieldDislike1.style.fontWeight = "bold";
    GarfieldDislike3.style.fontWeight = "bold";
}

function changeDislikeColor() {
    GarfieldDislike1.style.color = colorList[index]; 
    GarfieldDislike2.style.color = colorList[index]; 
    GarfieldDislike3.style.color = colorList[index];
    
    index += 1;

    if (index > colorList.length - 1) {
        index = 0;
    } 
}

var dislikeIntervalHandler = setInterval(changeDislikeColor, 200);

// If Else Statement:
var bodyContent = document.body.innerHTML;
var strBodyContent = bodyContent.toString();
var odieHeader = document.getElementById("GOdieHeader");

if (strBodyContent.includes("Odie")) {
    console.log("Odie found!");
    odieHeader.style.color = "Blue"; 
}

else {
    console.log("Odie not found!");
}

// Switch Statement:
var GJonHeaderText = document.getElementById("GJonHeader").textContent;
var lengthGJonHeaderText = GJonHeaderText.toString().length;
console.log("lengthGJonHeaderText = " + lengthGJonHeaderText);

switch (lengthGJonHeaderText) {
case 1:
    GJonHeader.style.color = "Red";
    console.log("Case 1 Reached");
    break;

case 2:
    GJonHeader.style.color = "Blue";
    console.log("Case 2 Reached");
    break;

case 3:
    GJonHeader.style.color = "Yellow"; 
    console.log("Case 3 Reached");
    break;

default:
    GJonHeader.style.color = "White";
    console.log("Default Case Reached");
    break;
}

// Check The Existence Of The Garfield Header:
var GGarfieldHeader = document.getElementById("GGarfieldHeader");

if (GGarfieldHeader) {
    console.log("Garfield Header exists!");
    GGarfieldHeader.style.color = "orange";
}

else {
    console.log("Garfield Header doesn't exist :(");
}

// Short Circuit Values:
var OdieLike1 = document.getElementById("GOdieLike1").textContent;
var OdieLike2 = document.getElementById("GOdieLike2").textContent; 
var shortCircuit1 = (OdieLike1 || 'Unknown');
var emptyString = '';
var shortCircuit2 = (emptyString || 'Bones');
var shortCircuit3 = (emptyString || {});

console.log("shortCircuit1 = " + shortCircuit1);
console.log("shortCircuit2 = " + shortCircuit2);
console.log("shortCircuit3 = " + shortCircuit3);

// Grab actual place holder list elements from page:
var OdieLike3 = document.getElementById("GOdieLike3");
var OdieLike4 = document.getElementById("GOdieLike4");
var OdieLike5 = document.getElementById("GOdieLike5");

// Place the resulting values inside the place holder list elements:
OdieLike3.textContent = shortCircuit1;
OdieLike4.textContent = shortCircuit2;
OdieLike5.textContent = shortCircuit3;

// For Loop
var odieDislikeArray = ["Cat Food", "Ghosts"];
var odieDislikeArrayLength = odieDislikeArray.length;
var roundNumber = 0;
var msg = '';
var i;

for (i = 0; i < odieDislikeArrayLength; i++) {
    roundNumber = (i + 1);

    msg += "Round " + roundNumber + " of Determining Odie's Dislikes: ";

    msg += odieDislikeArray[i] + '<br />';

    console.log(msg);
}

var OdieDislike1 = document.getElementById("GOdieDislike1");
var OdieDislike2 = document.getElementById("GOdieDislike2");

OdieDislike1.textContent = odieDislikeArray[0];
OdieDislike2.textContent = odieDislikeArray[1];

// While Loop
var i = 0;

while (i < 9) {
    console.log("Current Number of Lives = " + i);  
    i++; 
}

var GarfieldNumberOfLives = document.getElementById("GGarfieldNumberOfLives");

GarfieldNumberOfLives.textContent = "Number of Lives: " + i;

// Do While Loop:
var i = 1;
var msg = '';
var OdieOriginalOwner = document.getElementById("GOdieOriginalOwner");

// This will only run once because i = 1, and is NOT less than 1, so the do {} code section will run at least once:
do {
    msg += "Original Owner (According To The Comic): Lyman, Jon's old roommate";
    i++;
} while (i < 1);

OdieOriginalOwner.innerHTML = msg;
OdieOriginalOwner.style.color = "purple";
OdieOriginalOwner.style.fontWeight = "bold";
