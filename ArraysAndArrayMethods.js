// arrays and array methods
console.log("Arrays and array methods");

// creating arrays
let numbers = [1, 2, 3, 4, 5]; //numbers
let fruits = ["apple", "banana", "orange"]; //strings
let array = [1, "apple", true]; //mixed data types

console.log("Number Array : " + numbers);
console.log("String Array : " + fruits);
console.log("Mixed Data Types Array : " + array);

// accessing array
// fruits = ["apple", "banana", "orange"];
console.log("Fruits Array : " + fruits);
console.log("First element of fruits array : " + fruits[0]);

// modifying array
fruits[0] = "grape";
console.log("Modified fruits array : " + fruits);

//array methods
console.log("Arrays methods");

// adding, removing elements
console.log("Adding removing elements");
// push(), pop(), shift(), unshift()

let teams = [
  "fc barcelona",
  "real madrid",
  "manchested city",
  "bayern munich",
  "liverpool",
];

console.log("Initial teams array : " + teams);
teams.push("inter miami"); // add to end
console.log("After pushing inter miami : " + teams);
teams.pop(); // remove last
console.log("After popping : " + teams);
teams.unshift("napoli"); // add to start
console.log("After unshifting napoli : " + teams);
teams.shift();
console.log("After shifting : " + teams);

// finding elements
console.log("Finding elements");
// indexOf(), includes()

let games = ["football", "cricket", "volleyball"];
console.log("Games array : " + games);
console.log("Index of cricket : " + games.indexOf("cricket"));
console.log("includes volleyball : " + games.includes("volleyball"));
console.log("includes hockey : " + games.includes("hockey"));

// iteration
console.log("Iteration");
// for-each

console.log("Fruits : " + fruits); // fruits = ["grape", "banana", "orange"];
console.log("Using for-each : ");
fruits.forEach((fruits) => console.log(fruits));

// transforming arrays
console.log("Transforming arrays");
// map()

let numbersArray = [1, 2, 3, 4, 5];
console.log("Numbers array : " + numbersArray);
console.log("Using map() : ");
let doubledNumbers = numbersArray.map((number) => number * 2);
console.log(doubledNumbers);

// filtering arrays
console.log("Filtering arrays");
// filter()

console.log("Numbers array : " + numbersArray);
let numbersGreaterThan3 = numbersArray.filter((number) => number > 3);
console.log("Numbers greater than 3 : " + numbersGreaterThan3);

// reducing
console.log("Reducing arrays");
// reduce()

console.log("Numbers array : " + numbersArray);
let sumOfNumbers = numbersArray.reduce((total, num) => total + num, 0);
console.log("Sum of numbers : " + sumOfNumbers);

// sorting arrays
console.log("Sorting arrays");
// sort(), reverse()

let integers = [6, 8, 2, 4, 1];
console.log("Integers array : " + integers);
console.log("Sorted integers : " + integers.sort((a, b) => a - b)); // ascending, ((b - a) for desending)
console.log("Reversed integers : " + integers.reverse());

// spread and rest with arrays
console.log("Spread and rest with arrays");

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
console.log("Numbers1 array : " + numbers1);
console.log("Numbers2 array : " + numbers2);
let combinedNumbers = [...numbers1, ...numbers2];
console.log("Combined numbers array : " + combinedNumbers);
