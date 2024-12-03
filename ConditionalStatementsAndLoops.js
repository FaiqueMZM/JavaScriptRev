// conditional statements and loops
console.log("Conditional statements and loops");

// if-else
console.log("if-else statements");

let marks = 60;
console.log("Marks : " + marks);
if (marks >= 40) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}

// else-if
console.log("else-if statements");

let score = 75;

if (score >= 75) {
  console.log("Grade: A");
} else if (score >= 65) {
  console.log("Grade: B");
} else if (score >= 55) {
  console.log("Grade: C");
} else if (score >= 40) {
  console.log("Grade: S");
} else {
  console.log("Grade: F");
}

// ternary operators
console.log("ternary operators");

let isRaining = true;
console.log(isRaining ? "Take an umbrella." : "Enjoy the sunshine!");

let grade = 90;
let result =
  grade >= 75
    ? "A"
    : grade >= 65
    ? "B"
    : grade >= 55
    ? "C"
    : grade >= 40
    ? "S"
    : "Failed";
console.log("Result: " + result);

// loops
console.log("Loops");

// for loops
console.log("for loops");

for (let i = 1; i <= 5; i++) {
  console.log("Iteration : " + i);
}

// while loops
console.log("while loops");

let j = 1;
while (j <= 5) {
  console.log("Iteration : " + j);
  j++;
}

// do-while loops
console.log("do-while loops");

let k = 1;
do {
  console.log("Iteration : " + k);
  k++;
} while (k <= 5);

// for....of loops
console.log("for...of loops");

let numbers = [1, 2, 3, 4, 5]; // for arrays or iterables
for (let number of numbers) {
  console.log("Number : " + number);
}

// for...in loops
console.log("for...in loops");

let person = { name: "John", age: 30 }; //for objects
for (let property in person) {
  console.log(property + " : " + person[property]);
}
