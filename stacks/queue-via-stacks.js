class MyQueue {
  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  size() {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  push(x) {
    /* Push into stackNewest; wich always has the newes elements on top */
    this.stackNewest.push(x);
  }

  /* muve elements from stackNewest into stackOldest. This is usually done so that 
     we can do operations on stackOldest. */
  #shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  pop() {
    this.#shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.pop();
  }
  peek() {
    this.#shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.peek();
  }
  empty() {
    return this.stackNewest.size() + this.stackOldest.size() === 0;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.size() - 1];
  }
}
