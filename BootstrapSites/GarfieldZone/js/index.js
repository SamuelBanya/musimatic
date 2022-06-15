// Test To Replace A Word With Another Using .innerHTML.replace()
var IHeaderContent = document.getElementById("IHeaderContent");

IHeaderContent.innerHTML = IHeaderContent.innerHTML.replace("Sam", "Samuel");

// Make Jim Davis's name flash with red, white, and blue:
var colorList = ["red", "blue", "green"];
var colorList2 = ["pink", "orange", "purple"];

var index = 0;
var JimDavis = document.getElementById("IJimDavis");

function changeDavisNameColor() {
    JimDavis.style.color = colorList[index];
    index++;

    if (index > colorList.length - 1) {
        index = 0;
        JimDavis.style.fontWeight = "bold";
        colorList = colorList2;
    }
}

var intervalHandler = setInterval(changeDavisNameColor, 200);
