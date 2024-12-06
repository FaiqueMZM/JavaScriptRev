// oop in javascript
console.log("Object-oriented programming in JavaScript");

// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello, I'm ${this.name}! I'm ${this.age} years old`);
  };
}

const person1 = new Person("Max", 27);
const person2 = new Person("Kelly", 35);

person1.greet();
person2.greet();

// adding methods to prototypes
function Animal1(type) {
  this.type = type;
}

Animal1.prototype.makeSound = function () {
  console.log(`${this.type} makes a sound`);
};

const dog = new Animal1("Dog");
const cat = new Animal1("Cat");

dog.makeSound(); // Dog makes a sound
cat.makeSound(); // Cat makes a sound

// es6 classes
class AnimalES6 {
  constructor(type) {
    this.type = type;
  }

  makeSound() {
    console.log(`${this.type} makes a sound`);
  }
}

const dogES6 = new AnimalES6("Dog");
const catES6 = new AnimalES6("Cat");

dogES6.makeSound(); // Dog makes a sound
catES6.makeSound(); // Cat makes a sound

// inheritance
console.log("Inheritence");

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("Buddy");
myDog.eat(); // Buddy eats
myDog.bark(); // Buddy barks

// static methods
console.log("Static methods");
// belongs to the class, not an instance

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.add(5, 10)); // 15
console.log(MathUtils.subtract(15, 10)); // 5

// encapsulation
console.log("Encapsulation");

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class

// polymorphism
console.log("Polymorphism");

class AnimalP {
  sound() {
    console.log("Animal makes a sound.");
  }
}

class DogP extends AnimalP {
  sound() {
    console.log("Dog barks.");
  }
}

const animalP = new AnimalP();
const dogP = new DogP();

animalP.sound(); // Animal makes a sound.
dogP.sound(); // Dog barks.

// mixins
console.log("Mixins");
// allows sharing methods between unrelated classes

const sayHiMixin = {
  sayHi() {
    console.log("Hi!");
  },
};

class PersonS {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(PersonS.prototype, sayHiMixin);

const personS = new PersonS("Alice");
personS.sayHi(); // Hi!
