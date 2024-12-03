// basic operations

console.log("basic operations");
let a = 10;
let b = 5;
console.log("a = " + a + ", b = " + b);

// arithmetic operations
console.log("arithmetic operations");

// addition
console.log("addition");
console.log(a + b); // 15

// subtraction
console.log("subtraction");
console.log(a - b); // 5

// multiplication
console.log("multiplication");
console.log(a * b); // 50

// division
console.log("division");
console.log(a / b); // 2

// remainder
console.log("remainder");
console.log(a % b); // 0

// exponentiation
console.log("exponentiation");
console.log(a ** b); // 1000

//assignment operations
console.log("assignment operations");

let x = 10;

// addition assignment
console.log("addition assignment");
x += 5; // x = x + 5
console.log(x); // 15

// subtraction assignment
console.log("subtraction assignment");
x -= 3; // x = x - 3
console.log(x); // 12

// multiplication assignment
console.log("multiplication assignment");
x *= 2; // x = x * 2
console.log(x); // 24

// division assignment
console.log("division assignment");
x /= 4; // x = x / 4
console.log(x); // 3

// comparison operators
console.log("comparison operators");

console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(10 < 5); // false
console.log(10 == "10"); // true (loose equality)
console.log(10 === "10"); // false (strict equality)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// logical operations

console.log("logical operators");

console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false  (NOT)

// string operato
console.log("string operations");

let str1 = "Hello, ";
let str2 = "world!";
console.log(str1 + str2); // Hello, world!

console.log(str1.concat(str2)); // Hello, world!

console.log(str1.length);

console.log(str1.toLowerCase()); // hello

console.log(str1.toUpperCase()); // HELLO

console.log(str1.indexOf("l")); // 2

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // "John Doe"

// Template Literals (Recommended for modern JS)
console.log(`${firstName} ${lastName}`); // "John Doe"
