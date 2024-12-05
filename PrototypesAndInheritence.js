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

// es6 classes
console.log("ES6 classes");

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noice`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows`);
  }
}

let animal1 = new Animal("Animal");
let dog1 = new Dog("Buddy");
let cat1 = new Cat("Donut");

animal1.speak(); // Animal makes a noice
dog1.speak(); // Buddy barks
cat1.speak(); // Donut meows

// checking prototypes
console.log("Checking prototypes");

let obj = {};
console.log(Object.getPrototypeOf(obj));

console.log(Object.getPrototypeOf(animal1));
console.log(Object.getPrototypeOf(dog1));
console.log(Object.getPrototypeOf(cat1));

// overriding prototypes
console.log("Overriding prototypes");

let animal2 = {
  speak() {
    console.log("Animal makes a sound");
  },
};

let dog2 = Object.create(animal2);
dog2.speak = function () {
  console.log("Dog barks");
};

animal2.speak(); // Animal makes a sound
dog2.speak(); // Dog barks
