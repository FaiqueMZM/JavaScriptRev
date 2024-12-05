// advanced functions and closures
console.log("Advanced functions and closures");

// higher order functions
console.log("Higher order functions");
// functions that takes other function as arguments ot return a function

//passing a function as an argument
function greet(name) {
  return `"Hello ${name}"`;
}

function processName(name, callback) {
  console.log(callback(name));
}

processName("John", greet); // "Hello John"

// returning a function
function createGreeting(name) {
  return function () {
    return `"Hello ${name}"`;
  };
}

let greetJohn = createGreeting("John");
console.log(greetJohn()); // "Hello John"

// closures
console.log("Closures");
//when a function remmbers the variablesin its scope even after the outer function has executed

function outerCounter() {
  let count = 0;
  return function innerCounter() {
    count++;
    console.log(count);
  };
}

let counter = outerCounter();
counter(); // 1
counter(); // 2

// callback functions
console.log("Callback functions");
// functions that are passed as arguments to other functions

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000); // 2 sec timeout
}

function processData() {
  console.log("Data processed");
}

fetchData(processData); // "Data fetched" and "Data processed" after 2 seconds

// function currying
console.log("Function currying");
// transforming a function with multiple arguments into a series of functions taking one argument each

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8

// immediately invoked function expressions (IIFE)
console.log("IIFE");

(function () {
  console.log("This runs immediately!");
})();

// memoization
console.log("Memoization");
// storing the results of expensive function calls and reusing them when the same inputs occur again

function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Calculating result, 120
console.log(factorial(5)); // Fetching from cache, 120
