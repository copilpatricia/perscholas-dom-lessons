const app = document.getElementById("app");



//create a new element
const pEl = document.createElement("p");


// setting the text of the element
pEl.innerHTML = "This <code>p</code> element will change its style";

// we appended the element to the app div
app.appendChild(pEl);

//we styled the pEl using style.property = "value"
// camalCase for property, because - is considered an operator in JS
pEl.style.border = "2px solid red";
pEl.style.padding = "5px";
pEl.style.backgroundColor = "hotpink"



// create an <a> elem using JS and set the href attribute
const anchorTag = document.createElement("a");

//set the text content
anchorTag.textContent = "Google";

// set href attribute of the anchor tag
anchorTag.setAttribute("href", "http://www.google.com")

//append the anchor to the second div
app.appendChild(anchorTag);



//chef if an element has an id/class/name attribute; true or false
console.log(app.hasAttribute("name"))

if(app.hasAttribute("class")) {

    //grab the value of an attribute and store it another constant
    const className = app.getAttribute("class");
    console.log(className);
}


// classList

console.log(app.classList.contains("wrapper"))
console.log(app.classList);

// adding classes to the element
// if one of the classes I added is styled in css, will apply the style on the element
// didn't work for me bc I didn't link correctly
app.classList.add("wraper", "container", "another")
console.log(app.classList);

// checking if class wrapper is in the classlist
console.log(app.classList.contains("wraper"));

// remove a class from classList
app.classList.remove("another");
console.log(app.classList);

//toggle?
app.classList.toggle("wraper");
app.classList.toggle("wraper")
console.log(app.classList);
