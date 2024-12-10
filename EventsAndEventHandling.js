// events and event handling
console.log("Events and event handling");

// action or occurences detected by javascript
// user interaction => click, dblclick, mousover, keydown
// browser events => load, esize, scroll
// form events => submit, change, focus

// adding event listeners
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// removing event listeners
function logClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", logClick);
button.removeEventListener("click", logClick);

// event object
console.log("Event object");

document.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Clicked element:", event.target);
});

// event propogation
document.body.addEventListener(
  "click",
  () => console.log("Body clicked"),
  true
); // Capturing
document
  .querySelector("div")
  .addEventListener("click", () => console.log("Div clicked")); // Bubbling

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked!");
});

// event delegation
console.log("Event delegation");

const container = document.querySelector("#container");
document.querySelector("ul").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

// keyboard events
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// form events
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  console.log("Form submitted!");
});

// mouse events   click, dblclick, mouseover, mousemove
document.addEventListener("mousemove", (event) => {
  console.log(`Mouse at (${event.clientX}, ${event.clientY})`);
});
