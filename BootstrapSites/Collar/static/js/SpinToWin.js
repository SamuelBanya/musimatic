var STWmatchName = document.getElementById("STWmatchName");
var STWmatchProfilePic = document.getElementById("STWmatchProfilePic");
var STWCelebrityQuote = document.getElementById("STWCelebrityQuote");
var nameArray = ["MC Hammer", "Mike Sorrentino", "Martha Stewart", "Bono", "Fat Joe"];
var imageArray = ["MCHammer.jpg","Mike Sorrentino.jpg", "Martha Stewart.jpg", "Bono.jpg", "Fat Joe.jpg"];
var quoteArray = ['\"I blew $33 million on 200 staff members, a 40,000 sq. foot mansion, 19 racehorses, and 2 helicopters, BUT YOU CAN STILL TOUCH THIS! Hit me up, girl!\"',
				'\"I evaded paying taxes during my hit TV show, Jersey Shore, but still know how to pull out less than 10k from an ATM to have a good time ;)\"',
				'\"Looking for that young, single hunk who can fly my private helicopter over Long Island. I do not want another accountant though. No pressure ^_^\"',
				'\"My wife does not know I am on this website, though I am a millionaire with only two decent albums. Let us keep it that way.\"',
				'\"I evaded $1 million in claiming taxes 10 years ago, but that does not mean I cannot drop another million on you! Hit me up!\"'
				];
var likeCounterArray = [0, 0, 0, 0, 0];
var likeCounter = document.getElementById("STWLikeCounter");
var dislikeCounter = document.getElementById("STWDislikeCounter");
var dislikeCounterArray = [0, 0, 0, 0, 0];
var likeButton = document.getElementById("STWLikeButton");
var dislikeButton = document.getElementById("STWDislikeButton");
var imageIndex = 0;
var backButton = document.getElementById("STWBackButton");
var randomButton = document.getElementById("STWRandomButton");
var forwardButton = document.getElementById("STWForwardButton");
var randomTestButton = document.getElementById("STWRandomTestButton");

function nextProfilePicture(){
	if (imageIndex >= imageArray.length - 1){
		imageIndex = 0;
		STWmatchName.innerHTML = nameArray[imageIndex];
		STWmatchProfilePic.setAttribute("src", imageArray[imageIndex]);
		STWCelebrityQuote.innerHTML = quoteArray[imageIndex];
		likeCounter.innerHTML = likeCounterArray[imageIndex];
		dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
	}
	else {
		console.log("Next Button: imageIndex before addition: " + imageIndex);
		imageIndex++;
		console.log("Next Button: imageIndex after addition: " + imageIndex);
		STWmatchName.innerHTML = nameArray[imageIndex];
		STWmatchProfilePic.setAttribute("src", imageArray[imageIndex]);
		STWCelebrityQuote.innerHTML = quoteArray[imageIndex];
		likeCounter.innerHTML = likeCounterArray[imageIndex];
		dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
	}
};

function previousProfilePicture(){
	if (imageIndex <= 0) {
		imageIndex = imageArray.length - 1;	
		STWmatchName.innerHTML = nameArray[imageIndex];
		STWmatchProfilePic.setAttribute("src", imageArray[imageIndex]);
		STWCelebrityQuote.innerHTML = quoteArray[imageIndex];
		likeCounter.innerHTML = likeCounterArray[imageIndex];
		dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
	}
	else {
		console.log("Previous Button: imageIndex before subtraction: " + imageIndex);
		imageIndex--;
		console.log("Previous Button: imageIndex after subtraction: " + imageIndex);
		STWmatchName.innerHTML = nameArray[imageIndex];
		STWmatchProfilePic.setAttribute("src", imageArray[imageIndex]);
		STWCelebrityQuote.innerHTML = quoteArray[imageIndex];
		likeCounter.innerHTML = likeCounterArray[imageIndex];
		dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
	}
}

function randomProfilePicture(){
	var randomImageIndex = Math.floor(Math.random()*imageArray.length);
	console.log("randomImageIndex = " + randomImageIndex);
	STWmatchName.innerHTML = nameArray[randomImageIndex];
	STWmatchProfilePic.setAttribute("src", imageArray[randomImageIndex]);
	STWCelebrityQuote.innerHTML = quoteArray[randomImageIndex];
	likeCounterArray.innerHTML = likeCounterArray[imageIndex];
	dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
}

function likeButtonClick(){
	likeCounterArray[imageIndex] += 1;
	likeCounter.innerHTML = likeCounterArray[imageIndex];
}

function dislikeButtonClick(){
	dislikeCounterArray[imageIndex] += 1;
	dislikeCounter.innerHTML = dislikeCounterArray[imageIndex];
}

forwardButton.onclick = function(){
	nextProfilePicture();
}

randomButton.onclick = function(){
	randomProfilePicture();
}

backButton.onclick = function(){
	previousProfilePicture();
}

likeButton.onclick = function(){
	likeButtonClick();
}

dislikeButton.onclick = function(){
	dislikeButtonClick();
}