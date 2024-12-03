// functions
console.log("Funcitons");

// function declarations
function greet(name) {
  console.log("Hello, " + name);
}

greet("Max"); // "Hello, Max"

// function expressions
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 10)); // 15

// arrow functions
console.log("Arrow functions");
const multiply = (a, b) => a * b;
console.log(multiply(5, 10)); // 50

const divide = (a, b) => a / b;
console.log(divide(5, 10)); // 0.5

const greeting = (name) => {
  console.log("Hello, " + name);
};

greeting("Max"); // "Hello, Max"

// default parameters
console.log("Default parameters");
const greetMax = (name = "Max") => {
  return `Hello, ${name}`;
};
console.log(greetMax()); // "Hello, Max"

// rest parameters
console.log("Rest parameters");
const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);
console.log(sum(1, 2, 3, 4, 5)); // 15

// anonymous funtions
console.log("Anonymous functions");
setTimeout(function () {
  console.log("Hello, World!");
}, 3000); // "Hello, World!" after 3 second

// immediately invoked funciton expressions (IIFE)
console.log("IIFE");
(function () {
  console.log("Hello, World!");
})(); // "Hello, World!"
