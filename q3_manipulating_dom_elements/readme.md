# Q3 - Manipulating DOM elements

We can select elements, but what can we do with them? In this lab we will explore modifying the properties
of the elements that we have selected.

Remember that each element that we select via `document.querySelector` is an **object**. More specific, they are
a DOM element object. You can read out more about them here: https://developer.mozilla.org/en-US/docs/Web/API/Element

Here we will take a look at some of the properties which we can change

## innerText
This allows us to set the text data between the starting tag and closing tag of the element.

```
// change the first <p> in the HTML document to be "Hello World"
document.querySelector('p').innerText = "Hello World"
```

## innerHTML
Allows us to set the **nested** HTML content of an element. The browser will automatically create the HTML elements specified and add it to the targeted object.
```
// set the inner HTML of the first <div> in the document to be that of a paragraph and an anchor
// Note that this will create the <p> and <a> tag and add it into the <div>
document.querySelector('div').innerHTML="<p>Go to <a href='http://www.google.com'>Google</a></p>";
```

## style
We can also modify various css properties, such as background color, color, font family so on. Take note that we have to specify the CSS properties that we want to change using camel case.

```
// Change the background color of the first <span> in the document to be yellow
document.querySelector("span").style.backgroundColor = "yellow";
```

**IMPORTANT**: All values for the css properties must be given as *strings*. 

## The questions

Now equipped with this knowledge, try the following questions:

1. Change the first `<h1>` element in the document to say "Hello world!"

2. Change the background color of the first `<span id="important">` in the document to 'red'

3. Change the font family and font size of the first `<li class="todo">` to be the font Verdana and font size '16px'.

Once you are done, you can test by typing in the terminal:

```
npm test q3
```