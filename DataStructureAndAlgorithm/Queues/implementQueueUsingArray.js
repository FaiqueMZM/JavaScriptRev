// implement a queue using an array

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      return this.items.shift();
    }
  
    front() {
      return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  let queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.front());   // Output: 20
  console.log(queue.size());    // Output: 2
  