+++
title = "Completion Of Phase 1 Project For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-06-16T00:00:00-04:00
draft = false
+++

I am happy to note that I have successfully completed the Phase 1 project for the Flatiron School Software Development bootcamp, which can be found here:

-   <https://github.com/SamuelBanya/Meowser>

I don't have a live version of this project up yet, as I am assessing what specific platforms to possibly re-host all my pre-existing projects on, but will update this site accordingly with a list of projects when I am able to figure that portion out. I am currently debating using services like 'Netlify', 'Heroku', etc. to do so.

You can watch my YouTube demonstration of my Phase 1 project here:

-   <https://youtu.be/YvKMIDPTPpw>

Regarding the project itself, I learned a lot in terms of overall expectations of how to plan a web app in general.

At first, I wanted it to be more of a web app derivative like 'Rover.com', but with access to an authenticated API such as the 'PetFinder' API.

I then attempted to try to figure out how to possible utilize an actual authenticated API. The workarounds were a bit too difficult for a project only completed in a week, as they would heavily involve utilizing NodeJS with 'Express' as a workaround with the 'DotEnv' package:

-   <https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files>
-   <https://stackabuse.com/handling-cors-with-node-js/>
-   <https://www.npmjs.com/package/dotenv>

However, after dealing with many issues of running an API call within a Chrome browser such as 'CORS' (<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>), I opted to use the easier API endpoint, 'cat-fact':

-   <https://cat-fact.herokuapp.com/facts>

I then shifted my project's focus to be centered around Wikipedia, and then obtained information regarding the cat breeds from this Wikipedia article:

-   <https://en.wikipedia.org/wiki/List_of_cat_breeds>

I was able to scrape the related breed names for my project by using the following JS script that I placed within the Chrome Web Developer console:

```js
let breedNamesList = document.querySelectorAll("th a");

breedNamesList.forEach((breedName) => {
    console.log("{");
    console.log('"name": "', breedName.textContent, '"');
    console.log('"link": "', breedName.href, '"');
    console.log("},");
})
```

I was then able to obtain all of the breed images by  utilizing the following JS script in the Chrome Web Developer console:

```js
let breedImages = document.querySelectorAll("td a img");

breedImages.forEach((breed) => {
    console.log('"imageAlt": "', breed.alt, '"');
    console.log('"imageSrc": "', breed.src, '"');
});
```

I then utilized the following JS script to obtain a list of all of the cat related Wikipedia articles on that given page:

```js
let breedWikiLinks = document.querySelectorAll("th a");

breedWikiLinks.forEach((breedWikiLink) => {
    console.log('"wikiArticleLink": "', breedWikiLink.href, '"');
})
```

Afterwards, I then was able to pull in this cat information with this specific function which makes a fetch() call to 'db.json', and then dumps it onto the DOM so that the user can view the breeds within the related list:

```bash
function displayWikiCatBreeds() {
  fetch("http://localhost:3000/breeds")
    .then(response => response.json())
    .then(data => {
      let breedSelectTag = document.querySelector("#breedSelect");
      breedSelectTag.innerHTML = "";
      data.forEach((catBreed) => {
        let optionTag = document.createElement("option");
        optionTag.value = catBreed["link"];
        optionTag.textContent = catBreed["name"];
        breedSelectTag.append(optionTag);
      });
    });
}
```

I then started creating three separate event listeners for three separate buttons:

-   One button to be used to grab a cat breed image
-   A second button to be used to place the cat breed Wikipedia article onto the page
-   A third button to be used to grab a random cat fact to be placed onto the page

The first cat breed image button utilizes a fetch() request to make a 'GET' request for 'db.json' itself:

```js
catImageButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Clear out Wikipedia iframe if present on page:
    let wikipediaIFrame = document.querySelector("#wikipediaIFrame");
    clearElement(wikipediaIFrame);

    // Clear out 'resultsHeader' and 'resultsParagraph' if present on page:
    let resultsHeader = document.querySelector("#resultsHeader");
    let resultsParagraph = document.querySelector("#resultsParagraph");

    clearElement(resultsHeader);
    clearElement(resultsParagraph);

    let breedSelectTag = document.querySelector("#breedSelect");
    let breedName = breedSelectTag.options[breedSelectTag.selectedIndex].textContent;

    fetch("http://localhost:3000/breeds")
      .then(response => response.json())
      .then(data => {
        let filteredObject = data.filter(element => {
          return element.name == breedName;
        });

        let breedHeaderName = filteredObject[0]["name"];
        let filteredImageLink = filteredObject[0]["imageSrc"];

        let resultsHeader = document.querySelector("#resultsHeader");
        resultsHeader.textContent = breedHeaderName;

        let breakTag = document.createElement("br");

        let breedImage = document.createElement("img");
        breedImage.src = filteredImageLink;

        resultsHeader.append(breakTag);

        resultsHeader.append(breedImage);
      });
  });
```

The second Wikipedia article button simply makes another 'fetch()' call to 'db.json' to obtain the related Wikipedia article:

```js
let catWikiButton = document.querySelector("#catWikiButton");

catWikiButton.addEventListener("click", (e) => {
  e.preventDefault();

  let breedSelectTag = document.querySelector("#breedSelect");
  let breedLink = breedSelectTag.options[breedSelectTag.selectedIndex].value;
  let breedName = breedSelectTag.options[breedSelectTag.selectedIndex].textContent;
  breedLink = breedLink.toString().replace(/\s/g, '');

  // Clear out 'resultsHeader' and 'resultsParagraph' if present on page:
  let resultsHeader = document.querySelector("#resultsHeader");
  let resultsParagraph = document.querySelector("#resultsParagraph");

  clearElement(resultsHeader);
  clearElement(resultsParagraph);

  // Place wikipedia article contents into <iframe> within 'resultsParagraph' location
  let wikipediaIFrame = document.createElement("iframe");
  wikipediaIFrame.src = breedLink;
  wikipediaIFrame.id = "wikipediaIFrame";
  resultsParagraph.append(wikipediaIFrame);
});
```

The third random cat fact button was implemented by adding a 'click' event listener to a '#catFactButton' element. I then made a 'fetch()' call to the 'cat-fact' API. Afterwards, I converted the response into a JSON object, and then selected a random fact using the built-in 'Math.random()' library to pick a value from 0 to 4 so I can index into it properly. I then placed the result onto the DOM accordingly:

```js
let catFactButton = document.querySelector("#catFactButton");

  catFactButton.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(data => {
        // Pick a random fact using Math.random() with 4 numbers for 5 index values from 0 to 4:
        let choiceMax = data.length - 1;

        let choiceMin = 0;
        // From MDN Docs:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

        let choiceNumber = Math.floor(Math.random() * (choiceMax - choiceMin) + choiceMin);

        let randomChoice = data[choiceNumber];

        // Clear out Wikipedia iframe if present on page:
        let wikipediaIFrame = document.querySelector("#wikipediaIFrame");
        clearElement(wikipediaIFrame);

        let resultsHeader = document.querySelector("#resultsHeader");
        resultsHeader.textContent = "Random Cat Fact: ";

        let resultsParagraph = document.querySelector("#resultsParagraph");
        resultsParagraph.textContent = randomChoice["text"];
      });
  });
```

And that about wraps up the Phase 1 project itself. It was simple and effective, but to be honest, it did not start out that way. I learned a lot about how to really set expectations going forward on projects, and to have quicker functional prototypes to avoid having to struggle too much on a specific aspect of a project.

With this in mind, I am looking forward to more exciting web development challenges to tackle!

~ Sam