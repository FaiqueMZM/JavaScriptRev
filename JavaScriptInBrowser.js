// javascript in browser
console.log("Javascript in browser");

// browser object model (BOM)
conssole.log("Browser object model");

// window object
console.log(window.innerHeight);
console.log(window.innerWidth);

// alert
alert("This is an alert message");

// confrim
const isConfirm = confirm("Do you agree?");

// prompt
const input = prompt("Enter your name:");
console.log(input);

// navigate object
console.log(navigator.userAgent); // Browser user agent string
console.log(navigator.language); // Browser language
console.log(navigator.onLine); // Online status (true/false)

// screen object
console.log(screen.width); // Screen width in pixels
console.log(screen.height); // Screen height in pixels

// location object
console.log(location.href); // Current URL
location.href = "https://example.com"; // Redirect to another page

// timers
console.log("Timers");

// setTimeout
setTimeout(() => {
  console.log("Timeout called");
}, 2000);

// setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId); // Stop the interval
  }
}, 1000);

// local storage
console.log("Local storage"); // data kept even after the browser closed

localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username")); // JohnDoe
localStorage.removeItem("username");
localStorage.clear(); // Clears all local storage

// seesion storage
console.log("Session storage"); // data kept only for the session

sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // abc123
sessionStorage.clear();

// cookies
console.log("Cookies"); // store small amount of data

document.cookie = "username=JohnDoe; path=/; max-age=3600"; // Expires in 1 hour

console.log(document.cookie); // username=JohnDoe

// geolocation api
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  (error) => {
    console.log("Error:", error.message);
  }
);

// fetch data with api
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
