// objects and object methods
console.log("Objects and object methods");

// creating and accessing objetcs
console.log("Creating and accessing objects");

let person = { name: "John", age: 30 };
console.log(person);
console.log("Name : " + person.name);
console.log("Age : " + person.age);

// addind, updating and deleting properties
console.log("Adding, updating and deleting properties");

// add a property
person.city = "New York";
console.log("City : " + person.city);
console.log(person);

// update a proporty
person.age = 31;
console.log("Age : " + person.age);

// delete a property
delete person.city;
console.log("City : " + person.city); // undefined
console.log(person);

// checking properties
// using in, hasOwnProperty
console.log(person);
console.log("name" in person); // true
console.log("city" in person); // true

console.log("Has property name : " + person.hasOwnProperty("name")); // true
console.log("Has property city : " + person.hasOwnProperty("city")); // true

// looping though objects
console.log("Looping through objects");
console.log(person);
for (let i in person) {
  console.log(i + " : " + person[i]);
}

// object methods
console.log("Object methods");

let person1 = {
  name: "Max",
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

person1.greet(); // "Hello, my name is John"

// object destructuring

let { name, age } = person1;
console.log(name); // Max
console.log(age); // 27

// object spread
let person2 = { ...person1, city: "Monaco" };
console.log(person2); // { name: 'Max', age: 27, city: 'New York' }

// object ==> keys, values, entries
let person3 = {
  name: "Charles",
  age: 27,
  city: "Monaco",
};

console.log(person3);
console.log("Keys : " + Object.keys(person3)); // [ 'name', 'age', 'city' ]
console.log("Values : " + Object.values(person3)); // [ 'Max', 27, 'Monaco' ]
console.log("Entries : " + Object.entries(person3)); // [ [ 'name', 'Max' ], [ 'age', 27 ], [ 'city', 'Monaco' ] ]
