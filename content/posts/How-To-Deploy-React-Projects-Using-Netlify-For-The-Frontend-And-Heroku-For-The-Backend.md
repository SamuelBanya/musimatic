+++
title = "How To Deploy React Projects Using Netlify For The Frontend And Heroku For The Backend"
author = ["Samuel Banya"]
date = 2022-08-16T00:00:00-04:00
draft = false
+++

In this blog post, I am going to go over how I deployed the Phase 2 project I created for Flatiron School Software Development Bootcamp, which is a React app that provides an image reference board for users. This app itself depends upon a 'db.json' database that needs a live 'json-server' instance running so that it can send related fetch() requests to it accordingly.

In terms of the technologies used for this deployment, I utilized Netlify (<https://www.netlify.com/>) for the 'frontend' portion, and Heroku (<https://www.heroku.com/>) for the 'backend' portion.

Just to give a bigger picture of what to expect, this overall method of deployment involves two separate repos for your given project:

-   One repo that only contains the ‘db.json’ for the ‘backend’ database for the project which gets deployed to Heroku
-   Your project's main repo that contains your project’s frontend which gets deployed to 'Netlify'

I first referenced this guide which shows you how to run 'json-server' via a Heroku backend:

-   <https://github.com/jesperorb/json-server-heroku>

I then forked the 'json-server-heroku' repo above by using the green 'Use this template' button, and named the forked repo, 'BackToTheDrawingBoardJsonServer’:

-   <https://github.com/SamuelBanya/BackToTheDrawingBoardJsonServer>

I git cloned the 'BackToTheDrawingBoardJsonServer' repo to my local machine and modified the ‘db.json’ accordingly to fit my project’s needs so that it was just a blank slate, NOTE: If you need your 'db.json' filled in with data ahead of time, you can also choose to fill it with data as well so this decision is up to you:

```json
{
"photos": [
]
}
```

I then pushed my changes back to that repo mentioned above.

I then proceeded to navigate to the same directory’s project in a new terminal:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ pwd
/Users/samuelbanya/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer

samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ ls
README.md       db.json         package.json    server.js       yarn.lock
```

NOTE:

-   If you haven't done this already, you will need to install 'Heroku CLI' using their guide found here, so do this step next if you need to:
-   <https://devcenter.heroku.com/articles/heroku-cli>

I then 'logged in' to the 'Heroku CLI' by using the 'heroku login' terminal command which then opened up a separate web browser window to handle the authentication:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ heroku login
```

After authenticating successfully, I then used the ‘heroku create’ command to create a new heroku app from the same project’s folder, and made sure to pass in the name of the project, 'drawingboardjsonserver', for the second parameter as well:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ heroku create drawingboardjsonserver
```

NOTE: If you didn’t pass in the name parameter by mistake, you can reference a related guide from Heroku (<https://devcenter.heroku.com/articles/renaming-apps>) so that you can utilize the following Heroku CLI command sure to rename the Heroku app accordingly, which would update the app’s name on the Heroku Dashboard accordingly:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ heroku apps:rename BackToTheDrawingBoardJsonServer
```

I then used the following git command to push the same Heroku app to the 'heroku master' branch:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ git push heroku master
```

I then used the ‘heroku open’ command to open up the Heroku app in a new web browser window to check that it was working successfully:

```bash
samuelbanya@Samuels-MBP ~/hub/Development/code/phase-2/BackToTheDrawingBoardJsonServer $ heroku open
```

The previous command opened the running ‘json-server’ Heroku instance in a new browser tab:

-   <https://drawingboardjsonserver.herokuapp.com/>

I then went back to my original project's repo, aka the second repo in the context of this deployment, and modified each of the fetch() requests to point to the Heroku app’s actual API endpoint instead:

Example from ‘Board.js’ that was modified accordingly:

```js
useEffect(() => {
fetch("https://drawingboardjsonserver.herokuapp.com/photos", {
method: "GET",
headers: {
"Content-Type": "application/json",
},
})
.then((response) => response.json())
.then((data) => {
setPhotos(data);
});
}, [photos]);
```

Modified ‘Upload.js’:

```js
fetch("https://drawingboardjsonserver.herokuapp.com/photos", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
dataArray: dataArray,
}),
})
.then((response) => response.json())
.then((response) => {
console.log("response (from fetch request): ", response);
});
} else {
setErrors(["Name of photo is required!"]);
}
```

Modified ‘Photo.js’ fetch() request:

```js
fetch(`https://drawingboardjsonserver.herokuapp.com/photos/${id}`, {
method: "DELETE",
})
.then((response) => response.json())
.then(() => {
console.log("Delete request success!");
onDeletePhoto(id);
});
```

I then logged into my Netlify account, and connected my GitHub account.

I then added the second repo to it, and deployed it via the Netlify web GUI:

-   <https://github.com/SamuelBanya/BackToTheDrawingBoard>

This resulted in the live website being deployed here on Netlify:

-   <https://backtothedrawingboard.netlify.app/board>

Here's a summary of the involved components:

-   End result of my Phase 2 Project:
-   Live site on Netlify, which I basically just pointed the main GitHub repo to:
-   <https://backtothedrawingboard.netlify.app/board>

Related repos:

-   Frontend, deployed to ‘Netlify’:
-   <https://github.com/SamuelBanya/BackToTheDrawingBoard>
-   Backend for ‘json-server’, deployed to ‘Heroku’:
-   <https://github.com/SamuelBanya/BackToTheDrawingBoardJsonServer>

Heroku app portion of ‘json-server’:

-   <https://drawingboardjsonserver.herokuapp.com/>

Hopefully you found this useful, since I could not find a single guide that even did remotely half of these steps in a nice and easy fashion.

Thankfully, I didn't find this process to be too hard, and was actually able to repeat this process for the rest of the projects so that I now have a nice looking portfolio site that has all my projects deployed to Netlify accordingly:

-   <https://musimaticapps.netlify.app/>

Thanks for reading, and have fun deploying your own projects with 'Netlify' and 'Heroku'!

~ Sam