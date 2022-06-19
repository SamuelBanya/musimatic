+++
title = "Completion Of Phase 1 For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-06-17T00:00:00-04:00
draft = false
+++

I am happy to have completed Phase 1 of the Flatiron School Software Development bootcamp program!

It has been a learning experience in many ways for me, as I already knew a lot of JS development through various tech support jobs I have had over the past few years.

However, there are a few topics that were introduced within this phase that were challenging even for someone as technical as myself.

One such topic that I would like to go over within this blog post is the 'arrow' function. The idea behind 'arrow' functions is that they allow you to write less code by not having to declare 'function()' sections in your code.

For example, you can write an addition function that takes in two numbers, and returns a sum that looks like the following:

```js
function add(value1, value2) {
  return value1 + value2;
}
```

The cool thing is that you can shorten this a bit by using the '=&gt;' arrow function expression:

```js
const add(value1, value2) => value1 + value;
```

To the untrained eye, it reads a bit differently, and takes some time getting used to. However, if you compare this to a larger function that requires a more involved built-in method like Array.prototype.map(), you can convert something like this:

```js
const numbers = [1, 2, 3, 4, 5];

const squares = num.map(function(x) {
  return x ** 2;
})
```

... And by using an arrow function, we can then convert the 'squares' function to a single one line function accordingly:

```js
const numbers = [1, 2, 3, 4, 5];

const squares = nums.map(x => x ** 2);
```

The power of using an arrow function becomes super useful when you start getting into making API calls with the 'fetch()' method.

Using arrow functions becomes more useful when you start getting into using the 'fetch()' function to make API calls to an endpoint, especially when chaining '.then()' clauses after the initial call.

Here's an example of a 'fetch()' API call 'localhost' server running on port 1313:

```js
fetch("http://localhost:1313")
```

Here's the same example, but this time, we are now processing the data into a resulting JSON object with the '.json()' method. Notice how we still have to use a bulky 'function() { }' section, and also have to include a 'return' statement:

```js
fetch("http://localhost:1313")
  .then(function(response) {
    return response.json();
  })
```

Now, let's take this same example, and make it elegant with yet another arrow function. Notice how we can totally get rid of the 'return' statement, since the 'return' statement for an arrow function is implicit if the function only calls for one line of code:

```js
fetch("http://localhost:1313")
  .then((response) => response.json();)
```

The cooler variation is that we can even drop the additional parentheses outside the initial 'response' since we are only dealing with a single variable. The end result is a cleaner, and easier to read function. See how nicer this looks?

```js
fetch("http://localhost:1313")
  .then(response => response.json();)
```

With time I was able to slowly really appreciate how awesome arrow functions were as they made writing functions for various projects that much more simpler, and manageable.

Though there are other topics I could go on about at a later time which were a bit tricky for myself, such as determining the 'Big O' for a given algorithm to determine its efficiency, and more advanced object orientated programming styles in JavaScript, I honestly can say that I feel a lot more confident than before in being able to reference MDN docs from Mozilla when it comes to most JavaScript methods. This skill itself is invaluable since there always will be a built-in function that you might not remember how to utilize completely, and the MDN docs page usually offers a pretty good example of how to actually use it in action.

Overall, I am glad to have made it this far into the program given what I have had to balance in terms of job work load, as well as personal issues during the last few months. I am slowly making it, one day at a time, and becoming the web developer I truly want to be!

By the way, here are some MDN resources for some of the JS topics mentioned above for reference:

-   <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
-   <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
-   <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>
-   <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
-   <https://www.freecodecamp.org/news/big-o-notation-simply-explained-with-illustrations-and-video-87d5a71c0174>

~ Sam