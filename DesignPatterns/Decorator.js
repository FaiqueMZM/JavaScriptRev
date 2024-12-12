// decorator
console.log("Decorator");
// adds new functionality to an existing object dynamically

function addLogging(originalFunction) {
  return function (...args) {
    console.log(`Arguments: ${args}`);
    return originalFunction(...args);
  };
}

function multiply(a, b) {
  return a * b;
}

const loggedMultiply = addLogging(multiply);
console.log(loggedMultiply(3, 4)); // Logs arguments and result
