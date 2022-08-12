+++
title = "Completion Of Phase 2 Project For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-08-11T00:00:00-04:00
draft = false
+++

I am pretty stoked to have finished my Phase 2 project for the Flatiron School Software Development bootcamp called 'Back To The Drawing Board', which can be found here:

-   <https://github.com/samuelbanya/backtothedrawingboard>

This project runs locally, so you will have to use the 'git clone' command to pull that project down to your local machine, and install necessary dependencies with 'npm install' in the root directory.

Also, this utilizes the 'json-server' dependency, so you would have to install it with 'npm install json-server', and then run the project accordingly with the following commands:

```bash
json-server --watch db.json
npm start
```

You can watch my YouTube demonstration video of this project here:

-   <https://www.youtube.com/watch?v=LyFX5oBJiZk>

OVerall, this project was a bit more enjoyable to work on than the Phase 1 project since I had more of a cohesive and easier idea to implement instead of my previous project which started out as a clone of 'Rover.com'. This time around I decided to simply make an image reference board app in which you can upload art images with a name and hyperlink to a canvas. Once on the page, the user can then drag the images around, and resize them to suit the art you're working on.

I was able to get the last two functions through the 'Draggable' and 'Re-resizable' libraries found here respectively:

-   <https://www.npmjs.com/package/react-draggable>
-   <https://www.npmjs.com/package/re-resizable>

After a bit of research, I actually found the perfect live code sandbox demo that was similar to the functionality I wanted in my app, which is the following:

-   <https://stackblitz.com/edit/react-draggable-and-resizable-pictures?file=index.js>

In order to get a similar functionality in my project, I had to build out my app with an app hierarchy that allowed me to be able to utilize 'props' to pass down attributes and callback functions to be able to control what's being shown on screen.

The relationships of the components present for the project include the following ideas:

-   The 'App.js' parent component is responsible for the routing as well as the 'useState' section that controls the overall theme of the app
-   The 'About.js' child component details the functionality of the app itself
-   The 'Board.js' child component does a lot of the heavy lifting for the image board itself as it uses the 'useEffect' hook to grab images that were stored onto the 'db.json' database with a 'GET' request via 'json-server', and also handles deleting images via a callback function that is later passed to the 'Photo' component
-   The 'Photo.js' component contains the individual photo card elements that contain the '&lt;Draggable&gt;' and '&lt;Resizable&gt;' components respectively which can be dragged across the screen and resized at will
-   The 'Theme.js' component uses the 'onChange' event to grab the '&lt;select&gt;' tag's value and pass it up to the 'App.js' component to ultimately change the theme with an associated callback function
-   The 'Upload.js' component uses a fetch() request to store the 'photoName' and 'photoLink' of the image that the user provided which is then displayed later onto the 'Board.js' component

As you can imagine, dealing with these components at times can be a bit rough mentally, but once you get the hang of being able to pass 'props' back and forth between parent and child components, it becomes more of a balancing act to make sure everything is working correctly.

Another major roadblock I faced was actually how to implement 'V6' style routing into the project as newer projects created with the 'create-react-app' template from React demand that you utilize the 'V6' style of routing. With a bit of research, I found out this particular page on 'react router' to help a ton for this issue:

-   <https://reactrouter.com/docs/en/v6/getting-started/overview>

The fix basically is to install the necessary 'v6' component accordingly and to adjust the routing given the ideas from the blog post above to utilize the '&lt;Routes&gt;' and '&lt;Route&gt;' component to conform to the 'V6' style:

```bash
npm install react-router-dom@6
```

The main part that threw me off for a bit was how to actually deal with individual 'photo' components I wanted to create. I figured out that this required the use of a '.map()' iteration so that I could iterate through the entire 'photos' object returned from 'db.json'. I placed this into the contents of a related variable, which is shown in the related snippet from the 'return' statement for the 'Board.js' component below. Even indexing into the specific sections of the 'photo' object to create the 'photoName' and 'photoLink' variables respectively was a slight challenge, but a bit fun since I got to work with slightly complicated data structures as a result:

```js
const photoToDisplay = photos.map((photo) => {
  return (
    <div>
      <Photo
        key={photo["id"]}
        id={photo["id"]}
        photoName={photo["dataArray"][0]["photoName"]}
        photoLink={photo["dataArray"][0]["photoLink"]}
        onDeletePhoto={handleDeletePhoto}
      />
    </div>
  );
});

return <div>{photoToDisplay}</div>;
```

Inside the 'Photo.js' component, I had to then utilize a set of nested components so that both 'Draggable' and 'Resizable' components could be used, which is shown in this return statement snippet from the 'Photo.js' component:

```js
return (
  <Draggable>
    <Resizable
      id={id}
      className="imgClass"
      defaultSize={{
        width: 100,
        height: 100,
      }}
      style={{
        background: `url(${photoLink})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      lockAspectRatio={true}
    >
      <button onClick={handleDeletePhoto}>❌</button>
    </Resizable>
  </Draggable>
);
```

I was able to handle obtaining the photos themselves with a related fetch() call in the 'Board.js' component which calls 'db.json' via 'json-server' via the React based 'useEffect' hook. On this same note, the one thing that almost tripped me up was the use of the second parameter for the 'useEffect' call to literally utilize the same 'useState' variable called 'photos' so that I can store the contents of the filtered array into it. This was so that I could display the images in real time, even if I deleted one from the 'Board.js' component itself via the related callback function, which is shown in this snippet:

```js
function Board() {
  const [photos, setPhotos] = useState([]);

  function handleDeletePhoto(id) {
    const updatedPhotosArray = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotosArray);
  }

  useEffect(() => {
    fetch("http://localhost:3000/photos", {
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

Overall, I think this is a great showcase of how much of React I've learned so far, and it really is a great simple, but effective web app written in React!