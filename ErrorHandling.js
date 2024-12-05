// error handling
console.error("Error handling");

// type of errors
// syntax
// reference
// type

// syntax error
// console.log("hello)

// reference error
// console.log(myVar);

// type error
let num = 10;
// num.toLowerCase();

// try...catch block
console.log("try...catch block");

try {
  console.log(myVar);
} catch (error) {
  console.error("Error:", error.message);
}

// throwing errors
console.log("throwing errors");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}

// finally block
console.log("finally block");

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("This code will always run");
}

try {
  console.log("Trying...");
  throw new Error("Oops!");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("This always runs.");
}

// error object
console.log("Error object");
// name, message, trace

try {
  let num5 = 5;
  //   num5.toLowerCase();
} catch (error) {
  console.error("Error:", error.name);
  console.error("Message:", error.message);
  console.error("Stack trace:", error.stack);
}

// custom errors
console.log("Custom errors");

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new MyError("Invalid age");
  }
  return "Validation passed.";
}

try {
  console.log(validateAge(-10));
} catch (error) {
  console.error(`${error.name} : ${error.message}`);
}

// nested try catch block
console.log("Nested try catch block");

try {
  try {
    throw new Error("Inner error");
  } catch (innerError) {
    console.log("Caught inner error:", innerError.message);
    throw new Error("Outer error");
  }
} catch (outerError) {
  console.log("Caught outer error:", outerError.message);
}
