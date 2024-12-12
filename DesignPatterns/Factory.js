// factory
console.log("Factory");
// creates objects without specifying the exact class of object to create

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class CarFactory {
  static createCar(make, model) {
    return new Car(make, model);
  }
}

const car = CarFactory.createCar("Toyota", "Premio");
console.log(car); // Car { make: 'Toyota', model: 'Premio' }
