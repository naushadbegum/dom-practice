# Q1 - Basic Selector

In this execrise, we will practise basic selecting. This will be guided, but for the next question, you will be on your own!

## document.querySelector

We can use `document.querySelector`, a function, to select DOM elements by 

* tag name
* id
* class

The rules for selecting are similar to how to target specific elements for styling in our css files.

### Target by tag name
```
// select the first <div> in the HTML document
document.querySelector('div');
```

### Target by id
```
// select the first header with the id of 'title'
document.querySelector("h1#title");

// select the HTML element with the id of 'introduction'
document.querySelector('#introduction');
```

### Target by class
```
// Select all the first <span class='hints'> in the HTML document
document.querySelector('span.hints');

// select the first element with the class of 'interesting'
document.querySelector('.interesting')
```

### Assigning to a variable
Once you have selected an element via `document.querySelector`, you can assign it to a variable:

```
// assign the HTML element object to the variable e
let e = document.querySelector('#title');
```

## Now answer the following question

Write the code inside the `script.js` file. There is **no need** for any functions.

1. Assign to the variable `header` the first `<h1>` in the document.

2. Assign to the variable `important` the first `<span>` with the id of **important**

3. Assign to the variable `todo` the first `<li>` with the class of **todo**

