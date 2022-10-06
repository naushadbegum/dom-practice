# Form Manipulation
Remember that in `html` files we can have `<form>`. Here's an example of the form below:

```
<div>
  <div>
    <label>Email</label>
    <input type="text" id="email">
  </div>
  <div>
    <label>Seating preferences</li>
    <input type="radio" class="seating" value="outdoors">Outdoors
    <input type="radio" class="seating" value="indoors">Indoors
  </div>
  <div>
    <label>Services</label>
    <input type="checkbox" class="services" value="face-towels">Face towels
    <input type="checkbox" class="services" value="hand-made-noddles">Hand-made noodles
    <input type="checkbox" class="services" value="nail-paintings">Nail paintings
    <input type="checkbox" class="services" value="sing-birthday-song">Singing birthday song
  </div>
  <div>
    <label>Which branch</label>
    <select id="branch"> 
        <option value="northpoint">Northpoint</option>
        <option value="vivo">Vivo City</option>
        <option value="harbourfront">Harbourfront</option>
    </select>
  </div>
  <button id="submit">Submit</button>
</div>
```

## Add an event handler to read the form data
```
document.querySelector('#submit').click(function(){
    // code to read from the form elements here
})
```

## Read from `<input type='text'>`
```
let email = document.querySelector('#email').value
```

## Read from Radio buttons
```
let seatings = document.querySelectorAll('.seating');
// there can be only selected radio button
let selectedSeating = null;
for (let s of seatings) {
    // check if this radio button is checked
    if (s.checked) {
        selectedSeating = s;
        // can stop searching since only one is selected
        break;
    }
}
console.log("Selected seating =", selectedSeating.value);
```

## Read from Checkboxes
```
// since more than one checkboxes can be selected, we use an array to
// store all the checked checkboxes.
let selectedServices = [];
let services = document.querySelectorAll('.services');
for (let s of services) {

    if (s.checked) {
        selectedServices.push(s.value)
    }
}
console.log(selectedServices)
```

## Read from `<select>`
```
let selected = document.querySelector('#branch').value;
```

## The question

Examine the form in `index.html` carefully, and answer the following questions in `script.js`. Answer all the questions
within the function.

1. Extract out the email address from the form and store it in a variable named `email`

2. Extract out the selected phone model from the form and store it in a variable named `model`

3. Extract out the required services, and store it in a variable named `services`

4. Extact out the selected pickup point and store it in a variable named `pickup`

To preview your code, open this folder in the terminal and type `python3 -m http.server` (if using Gitpod)

To test, type `npm test forms_1`