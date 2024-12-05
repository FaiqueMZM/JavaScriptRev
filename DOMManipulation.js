// DOM manipulation
console.log("DOM manipulation");

// selecting elements
console.log("Selecting elements");

// by id
const id = document.getElementById("myId");
console.log("ID element : " + id);

// by class
const className = document.getElementById("myClass");
console.log("Class element : " + className);

// by tag name
const tagName = document.getElementById("p");
console.log("Paragraph element : " + tagName);

// query selector
const elements = document.querySelector(".myClass");
const elementss = document.querySelectorAll(".myClass");
console.log(elements);

// manipulating elements
console.log("Manipulating elements");

// changing text
const element = document.getElementById("myId");
element.textContent = "Hello world";

// changing html
// const element = document.getElementById("myId");
element.innerHTML = "<html><head><title>Hello world</title></head";

// change attributes
// const element = document.getElementById("myId");
element.setAttribute("data-info", "some data");
console.log(element.getAttribute("data-info"));

// change styles
// const element = document.getElementById("myId");
element.style.color = "red";
element.style.fontSize = "24px";

// adding and removing elements
console.log("Adding and removing elements");

// create element
const newDiv = document.createElement("div");
newDiv.textContent = "New div";
document.body.appendChild(newDiv);

// inserting elements before another element
const parent = document.getElementById("parent");
const newElement = document.createElement("p");
newElement.textContent = "New paragraph";
parent.insertBefore(newElement, parent.firstChild);

// removing elements
// const element = document.getElementById("myId");
element.remove();

// event listeners
console.log("Event listeners");

// add event listener
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// remove event listener
button.removeEventListener("click", function () {
  console.log("Button clicked!");
});

// event object
button.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});

// event delegation
console.log("Event delegation");

// const parent = document.getElementById("parent");
document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(`Button ${event.target.textContent} clicked!`);
  }
});

// DOM traversal
console.log("DOM traversal");

const element = document.getElementById("myId");
console.log(element.parentElement);
console.log(element.children);
console.log(element.nextElementSibling);
console.log(element.previousElementSibling);

// modifying classes
console.log("Modifying classes");

element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("toggleClass");

// form handling
console.log("Form handling");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData.get("username"));
});
