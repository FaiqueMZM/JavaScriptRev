// debugging
console.log("Debugging");

// using console
const user = {
  name: "Max",
  age: 27,
};

console.log(user); // { name: 'Max', age: 27 }
console.table(user);

console.error("An error occurred");
console.warn("This is a warning");

// using debugger statement
function calculateSum(a, b) {
  debugger;
  return a + b;
}

calculateSum(5, 3);
