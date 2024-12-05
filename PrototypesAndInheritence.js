// prototypes and inheritence
console.log("Prototypes and inheritence");

// object literals
let animal = {
  eats: true,
  sound() {
    console.log("animal sound");
  },
};

let dog = {
  bark() {
    console.log("bark");
  },
};

dog.__proto__ = animal;

dog.sound();
dog.bark();

// using object.create()
let cat = Object.create(animal);
cat.meow = function () {
  console.log("meow");
};
cat.plays = true;

cat.sound();
cat.meow();
console.log(cat.eats); // from animal object
console.log(cat.plays); //from cat object
console.log(cat.jumps); // undefined

// constrtor functions and prototypes
console.log("Constructor functions and prototypes");

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let max = new Person("Max");
let charles = new Person("Charles");

max.greet(); // "Hello, my name is Max"
charles.greet(); // "Hello, my name is Charles"
