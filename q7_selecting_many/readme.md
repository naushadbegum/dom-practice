# Q7 - Selecting many

So far we have been selecting one element at a time. What if we want multiple elements?

For this, we will be use `querySelectorAll`. This will return an array of elements that match the critera.

## Example of selecting many
For instance, let assume we have the following HTML:

```
<html>
    <ul>
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>        
    </ul>
</html>
```

In the case above, we have three `<li class="item">` elements, and we want to select all three. We can
do so with:

```
let selected = document.querySelectorAll('.item');
// selected will be [<li>, <li>, <li>]
```

## Manipulating multiple elements

Since `querySelectorAll()` returns an array, we must **use a for loop to manipulate those elements**

```
for (let s of selected) {
    s.style.backgroundColor = 'yellow';
}
```

## Now for the question

Select all the `<li class="todo">` elements and set their color to orange.

## Testing
When you want to test, do so by typing in the terminal:

```
npm test q7
```