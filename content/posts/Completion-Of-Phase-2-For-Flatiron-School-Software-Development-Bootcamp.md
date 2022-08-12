+++
title = "Completion Of Phase 2 For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-08-12T00:00:00-04:00
draft = false
+++

I am happy to note that I have successfully completed the requirements of Phase 2 for the Flatiron School Software Development Bootcamp.

Overall, it was not that easy to complete, but I am very proud that I did it. React itself was a very new topic for me, so unlike the previous phase where I completely knew what I was doing, I felt like I was thrown into the deep end with a floatable raft that comprises the React docs themselves.

React to me is a very neat framework that clearly has its reasons for its design choices. It aims to be a framework where you can really build an all-in-one page app that flows so nicely with parent and child components being able to pass down 'props' which contain related attributes or callback functions that can be used seamlessly throughout a project.

One particular topic I would like to focus on within this post is the 'useEffect' hook and why I find it to be one of the selling points for React as it shows just how powerful React is in terms of being able to update a page in real-time.

The 'useEffect' React hook allows you to call a load event when a page fully renders. This means that you can totally take advantage of using an API call to a local 'db.json' with a fetch() call when a page loads. This is awesome because you can show components such as images being updated in real time.

A good example of this would be from my own Phase 2 project mentioned in my earlier post. In this project, I had to grab the 'photos' object from the related '/photos' endpoint. In order to do this, I had to utilize 'useEffect' and call the endpoint accordingly, and make sure to pass in the 'photos' variable I created with the 'useState' hook so that I can ensure I was including the most up-to-date array, as shown by this snippet from my 'Board.js' component:

```js
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

I even ended up using the 'useEffect' hook in the overarching parent component, 'App.js', to set the default theme of the project to be the light theme, 'App light', as shown with this 'useEffect' example from the 'App.js' component snippet here. You'll notice that in this example however, I am passing an empty dependency array as the second argument to 'useEffect' so that the function call to the 'setTheme' function is only called once:

```js
useEffect(() => {
  setTheme("App light");
}, []);
```

Overall, the 'useEffect' hook as seen by the two examples above has its importance for allowing a project to be dynamic to be able to continuously call a function if needed, or simply call it once.

The 'useEffect' hook itself's Docs page can be found here for reference, NOTE: Stick to the 'Function' components sections if you're not used to creating 'Class' components in React:

-   <https://reactjs.org/docs/hooks-effect.html>

Thanks for reading my post!

~ Sam