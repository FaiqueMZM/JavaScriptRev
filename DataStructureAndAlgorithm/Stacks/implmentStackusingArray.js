// implement a stack uisng array

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) return "Stack is empty";
      return this.items.pop();
    }
  
    peek() {
      return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); 
  console.log(stack.peek()); 
  console.log(stack.size()); 
  
