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
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue()); 
  console.log(queue.front());   
  console.log(queue.size());    
  