// Change Main Image Function:

var mainCelebrityImage = document.getElementById("mainCelebrityImage");

var mainCelebrityQuote = document.getElementById("mainCelebrityQuote");

var imageArray = ["Bono.jpg", "Martha Stewart.jpg"]; 

var quoteArray = ['\"How else would I have avoided the IRS and my wife? I\'ve turned Bloody Sunday into Scandalous Saturday with this website. A must have!\" ~ Bono, Jan 2018', '\"This website helped me date young men all throughout Long Island, all while flying my private helicopter, and using my iPhone X. Collar is truly the best!\" ~ Martha Stewart, Feb 2018']

var index = 0;

function changeMainCelebrity(){
  mainCelebrityImage.setAttribute("src", imageArray[index]);
  mainCelebrityQuote.innerHTML = quoteArray[index];
  
  index++;
  
  if (index > imageArray.length - 1){
    index = 0;
  }
  
}

var intervalHandler = setInterval(changeMainCelebrity, 5000);
