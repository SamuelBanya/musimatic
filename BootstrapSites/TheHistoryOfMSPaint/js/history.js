var today = new Date();

var hourNow = today.getHours()

var hiddenFeaturesHeader = document.getElementById("HsHiddenFeaturesHeader"), modes = document.getElementsByClassName("HsHiddenFeaturesList"), index = 0;

var morningColorList = ["yellow", "white", "black"];

var afternoonColorList = ["orange", "white", "black"];

var nightColorList = ["red", "white", "black"];

var crazyColorList = ["pink", "blue", "black"];

currentColorList = [];

if (hourNow > 18){
	greeting = "Good Evening!";
} else if (hourNow > 12){
	greeting = "Good Afternoon!";
} else if (hourNow > 0){
	greeting = "Good Morning!";
} else{
	greeting = "Welcome!";
}


if (hourNow > 18){
	currentColorList = nightColorList;
} else if (hourNow > 12){
	currentColorList = afternoonColorList;
} else if (hourNow > 0){
	currentColorList = morningColorList;
} else{
	currentColorList = crazyColorList;
}


function changeHiddenFeaturesHeaderColor(){
	hiddenFeaturesHeader.style.color = currentColorList[index]
	
	index++;
	
	if(index > currentColorList.length - 1){
		index = 0;
	}
}

var intervalHandler = setInterval(changeHiddenFeaturesHeaderColor, 125);
