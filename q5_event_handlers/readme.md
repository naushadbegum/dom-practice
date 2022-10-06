# Q5 - Event Handlers

An event handler is a function that **activates** when a certain event is detected on a DOM element.

It is **important** to understand that setting an event handler is **declarative**. Unlike many other JavaScript code,
the act of adding an event hanldler is not imperative, but **declarative**. So it will be a standing instruction.

## Add an event handler

Suppose we have the following HTML:

```
<html>
    <button id="btn">Click me!</button>
</html>
```
We can cause the button to flash an alert prompt when it is clicked by declaring the following:

```
document.querySelector('#btn').addEventListener('click', function(){
    alert("You have clicked me!")
})
```
Now with this knowledge, try the following quesiton:

Given the HTML, add an event listener to the button with the id of `changeColor` such that when it is clicked, the `<h1>` element's background color will become yellow.

