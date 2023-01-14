+++
title = "Completion Of Phase 5 Project For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2023-01-13T00:00:00-05:00
draft = false
+++

I have completed my Phase 5 project which can be found deployed here:

-   <https://party-planner.onrender.com/>

The related GitHub repo that's part of this project can be found here:

-   <https://github.com/SamuelBanya/PartyPlanner>

This is a full stack web application that is written with React for its frontend, and has a Ruby On Rails with Postgresql database backend. It can be deployed locally by using the following set of commands:

NOTE:

-   You need to have 'postgresql' 15 installed on your local machine, so search online how to do this first before proceeding.

Then, run this command to install the project's components:

```bash
npm install
npm install --prefix client
gem install
```

Its Rails backend can then be run locally with the following Bash command within the root of the project directory:

```bash
sudo service postgresql start
rails s
```

Its React frontend can be run locally with the following Bash command within the root of the project directory:

```bash
npm start --prefix client
```

The major goal of this project is to allow a user to create a party, add items to that party, add a location to that party, and also view all parties on its summary page. Each of the previously mentioned components are crud compatible meaning I can edit, and delete them via frontend actions to the backend database.

The 'View All Parties' or 'Summary' page features the Google Maps API in two ways. The data from all parties is aggregated via a fetch call made in the child 'Summary' component:

```js
useEffect(() => {
    fetch("/parties", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    })
    .then((response) => response.json())
    .then((data) => {
        onFetchSummaryParties(data);
    });
}, []);
```

The corresponding 'onFetchSummaryParties' function found within the parent App.js component then obtains the data in an asynchronous way:

```js
async function handleFetchSummaryParties(fetchedParties) {
  // Loop through each party and check to see if it has a location
  // If it has a location, then run the 'get_coordinates' function to its actual 'lat' and 'lng' values accordingly so that we can
  // later use them for the map on the summary page:
  const promises = fetchedParties.map(async (party) => {
    if (party.location) {
      let position = await get_coordinates(party.location.name);

      return {...party, location: {...party.location, position: position}};
    }
    else {
      return party;
    }
  });

  const modifiedParties = await Promise.all( promises );

  setParties(modifiedParties);
}
```

The 'onFetchSummaryParties' function then calls the more specific function that is responsible for making the calls to the 'Geocoder' library which is the 'get_coordinates' function found within the parent App.js component. this function utilizes the 'process.env' method of retrieving the API key from the React frontend, which is fine since there is no other way to really secure the Google Maps API key as it is meant for the React frontend to directly access this information. It also then then goes through each of these parties and uses a process called 'Geocoding' via the 'Geocoder' library found within the Google Maps API to take a city address, and converts it into 'longitude' and 'latitude' points to be used by 'markers' later on:

```js
async function get_coordinates(name) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  return await Geocode.fromAddress(name).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      let position = { lat: lat, lng: lng }
      // Related Stackoverflow post:
      // https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
      return position
    },
    (error) => {
      console.error(error);
    }
).then((response) => {
  return response;
})}
```

Within the child Summary component, each of the data sections are mapped through in order to create a list of markers, which are really just typical map pins, but relabeled to suit Google's naming preference. Here is the related section that is in the middle of the 'Summary.js' child component, and is way after the initial declaration of the 'markers' array:

```js
if (party.location) {
    if (Object.keys(party.location).length > 0) {
        partyLocation = (
            <li key={party.location.id}>{party.location.name}</li>
        )
        // Create new 'marker' object for the map here
        // Provide the 'party.location.id' as the 'id' value
        // Provide the 'party.location.name' for the 'name' value
        // Use the 'Geocoder' fetch call to obtain the correct longitude and latitude results for each of the locations --> This might be tricky since they might not be received in time
        let newMarker = { id: party.location.id, name: party.name + ": " + party.location.name, position: party.location.position }
        markers.push(newMarker);
    }
}
```

This is then rendered to the user as pins on the map that can be clicked to reveal the given party's information.

I also used the 'useContext' hook in order to create a simple 'hello' message. I started this process by creating a related context file called 'HelloContext.js' in the 'context' directory with the following:

```js
import React, { createContext } from "react";

const HelloContext = createContext();

function HelloProvider({children}) {
    return (
        <HelloContext.Provider value="Hello">
            {children}
        </HelloContext.Provider>
    )
}

export { HelloContext, HelloProvider }
```

I then imported the context provider within the App.js component:

```js
import { HelloProvider } from "./context/HelloContext";
```

I then wrapped the context around the desired routing section for the 'About' component in the parent App.js component. I also passed down the 'user' as a separate 'props' value as well:

```js
<Route
  path="/"
  element={
    <HelloProvider>
      <About user={user}/>
    </HelloProvider>
  }
/>
```

I then was able to utilize the context by simply creating a header on the 'About' page that contained the user's username:

```js
import React, { useState, useContext, createContext } from "react";
import { HelloContext } from "./context/HelloContext";

function About({ user }) {
    const value = useContext(HelloContext);
    return (
        <div>
            <h2>About Page</h2>
            <h3>{value}, {user.username}!</h3>
```

And that is my Phase 5 project.