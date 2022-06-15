// GitHub Api Approach:
// Examples:
// https://stackoverflow.com/questions/10341135/example-of-using-github-api-from-javascript
// https://developer.github.com/v3/git/commits/

// GitHub Repo Commit Date List Elements:
TheComplete2019WebDevCourseCommitDate_ListItem = document.getElementById("TheComplete2019WebDevCourseCommitDate_ListItem");
ScriptsCommitDate_ListItem = document.getElementById("ScriptsCommitDate_ListItem");
NashvilleWeatherWebscraperCommitDate_ListItem = document.getElementById("NashvilleWeatherWebscraperCommitDate_ListItem");
ExpressOrLocalAppCommitDate_ListItem = document.getElementById("ExpressOrLocalAppCommitDate_ListItem");
GardenMenuWebscraperCommitDate_ListItem = document.getElementById("GardenMenuWebscraperCommitDate_ListItem");
HockeyWebscraperCommitDate_ListItem = document.getElementById("HockeyWebscraperCommitDate_ListItem");
GarfieldComicOfTheDayWebscraperCommitDate_ListItem = document.getElementById("GarfieldComicOfTheDayWebscraperCommitDate_ListItem");
CatOfTheDayWebscraperCommitDate_ListItem = document.getElementById("CatOfTheDayWebscraperCommitDate_ListItem");

// GitHub Repo Commit Link List Elements:
TheComplete2019WebDevCourseCommitLink_ListItem = document.getElementById("TheComplete2019WebDevCourseCommitLink_ListItem");
ScriptsCommitLink_ListItem = document.getElementById("ScriptsCommitLink_ListItem");
ExpressOrLocalAppCommitLink_ListItem = document.getElementById("ExpressOrLocalAppCommitLink_ListItem");
NashvilleWeatherWebscraperCommitLink_ListItem = document.getElementById("NashvilleWeatherWebscraperCommitLink_ListItem");
GardenMenuWebscraperCommitLink_ListItem = document.getElementById("GardenMenuWebscraperCommitLink_ListItem");
HockeyWebscraperCommitLink_ListItem = document.getElementById("HockeyWebscraperCommitLink_ListItem");
GarfieldComicOfTheDayWebscraperCommitLink_ListItem = document.getElementById("GarfieldComicOfTheDayWebscraperCommitLink_ListItem");
CatOfTheDayWebscraperCommitLink_ListItem = document.getElementById("CatOfTheDayWebscraperCommitLink_ListItem");

// The following section utilizes the GitHub REST Api, and uses the "Fetch" JS library to make
// the appropriate request to return JSON data so that I can later display it in actual
// HTML list elements on the Jumbotron on the top of my main webpage:

// The following code is for the "TheComplete2019WebDevelopmentBootcamp GitHub Repo:
fetch("https://api.github.com/repos/SBanya/TheComplete2019WebDevelopmentBootcamp/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var theComplete2019WebDevCourseCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For TheComplete2019WebDevelopmentBootcamp GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(theComplete2019WebDevCourseCommitDate)));
	formatTheComplete2019WebDevCourseCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(theComplete2019WebDevCourseCommitDate));
	TheComplete2019WebDevCourseCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date:</strong> ' + formatTheComplete2019WebDevCourseCommitDate; 
	var theComplete2019WebDevCourseCommitLink = myJson.html_url; 
	TheComplete2019WebDevCourseCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link:</strong> <a class="btn btn-success btn-sm" href=' + theComplete2019WebDevCourseCommitLink + '>GITHUB</a>';
  });

// The following code is for the "scripts" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/scripts/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var scriptsCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The scripts GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(scriptsCommitDate)));
	formatScriptsCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(scriptsCommitDate));
	ScriptsCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatScriptsCommitDate;
	var scriptsCommitLink = myJson.html_url; 
	ScriptsCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + scriptsCommitLink + '>GITHUB</a>';
  });

// The following code is for the "ExpressOrLocalApp" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/ExpressOrLocalApp/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var expressOrLocalAppCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The ExpressOrLocalApp GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(expressOrLocalAppCommitDate)));
	formatExpressOrLocalAppCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(expressOrLocalAppCommitDate));
	ExpressOrLocalAppCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatExpressOrLocalAppCommitDate; 
	var expressOrLocalAppCommitLink = myJson.html_url; 
	ExpressOrLocalAppCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + expressOrLocalAppCommitLink + '>GITHUB</a>';
  });

// The following code is for the "Nashville Weather Webscraper" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/NashvilleWeatherWebscraper/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var nashvilleWeatherWebscraperCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The scripts GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(scriptsCommitDate)));
	formatNashvilleWeatherWebscraperCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(nashvilleWeatherWebscraperCommitDate));
	NashvilleWeatherWebscraperCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatNashvilleWeatherWebscraperCommitDate;
	var nashvilleWeatherWebscraperCommitLink = myJson.html_url; 
	NashvilleWeatherWebscraperCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + nashvilleWeatherWebscraperCommitLink + '>GITHUB</a>';
  });

// The following code is for the "TheGardenMenuWebscraper" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/TheGardenMenuWebscraper/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var theGardenMenuWebscraperCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The GardenMenuWebscraper GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(theGardenMenuWebscraperCommitDate)));
	formatGardenMenuWebscraperCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(theGardenMenuWebscraperCommitDate));
	GardenMenuWebscraperCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatGardenMenuWebscraperCommitDate;
	var gardenMenuWebscraperCommitLink = myJson.html_url; 
	GardenMenuWebscraperCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + gardenMenuWebscraperCommitLink + '>GITHUB</a>';
  });

// The following code is for the "HockeyWebscraper" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/HockeyWebscraper/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var hockeyWebscraperCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The HockeyWebscraper GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(hockeyWebscraperCommitDate)));
	formatHockeyWebscraperCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(hockeyWebscraperCommitDate));
	HockeyWebscraperCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatHockeyWebscraperCommitDate;
	var hockeyWebscraperCommitLink = myJson.html_url; 
	HockeyWebscraperCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + hockeyWebscraperCommitLink + '>GITHUB</a>';
  });

// The following code is for the "GarfieldComicOfTheDayWebscraper" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/GarfieldComicOfTheDayWebscraper/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var garfieldComicOfTheDayWebscraperCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The GarfieldComicOfTheDayWebscraper GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(garfieldComicOfTheDayWebscraperCommitDate)));
	formatGarfieldComicOfTheDayWebscraperCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(garfieldComicOfTheDayWebscraperCommitDate));
	GarfieldComicOfTheDayWebscraperCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatGarfieldComicOfTheDayWebscraperCommitDate;
	var garfieldComicOfTheDayWebscraperCommitLink = myJson.html_url; 
	GarfieldComicOfTheDayWebscraperCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + garfieldComicOfTheDayWebscraperCommitLink + '>GITHUB</a>';
  });

// The following code is for the "CatOfTheDayWebscraper" GitHub Repo:
fetch("https://api.github.com/repos/SBanya/CatOfTheDayWebscraper/commits/master")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	// console.log(myJson);
	// console.log("Latest commit date: " + myJson.commit.author.date);
	// Using Intl.DateTimeFormat:
	var catOfTheDayWebscraperCommitDate = new Date(myJson.commit.author.date);
	var options = { timeZone: "America/New_York", timeZoneName: "short",  weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	// console.log("Latest Commit For The CatOfTheDayWebscraper GitHub Repo: " + new Intl.DateTimeFormat("en-US", options).format(new Date(catOfTheDayWebscraperCommitDate)));
	formatCatOfTheDayWebscraperCommitDate = new Intl.DateTimeFormat("en-US", options).format(new Date(catOfTheDayWebscraperCommitDate));
	CatOfTheDayWebscraperCommitDate_ListItem.innerHTML = '<strong>Latest Commit Date: </strong>' + formatCatOfTheDayWebscraperCommitDate;
	var catOfTheDayWebscraperCommitLink = myJson.html_url; 
	CatOfTheDayWebscraperCommitLink_ListItem.innerHTML = '<strong>Latest Commit Link: </strong><a class="btn btn-success btn-sm" href=' + catOfTheDayWebscraperCommitLink + '>GITHUB</a>';
  });
