// implement a queue using two stacks

class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(element) {
      this.stack1.push(element);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.length === 0 ? "Queue is empty" : this.stack2.pop();
    }
  }
  
  let q = new QueueUsingStacks();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.dequeue()); // Output: 1
  console.log(q.dequeue()); // Output: 2
  console.log(q.dequeue()); // Output: 3
  console.log(q.dequeue()); // Output: "Queue is empty"
  