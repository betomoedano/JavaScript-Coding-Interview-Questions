class MinMaxStack {
    constructor() {
      this.minMaxStack = [];
      this.stack = [];
    }
  
    // O(1) time | O(1) space
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    // O(1) time | O(1) space
    pop() {
      this.minMaxStack.pop();
      return this.stack.pop();
    }
  
    // O(1) time | O(1) space
    push(number) {
      const newMinMax = { min: number, max: number };
      if (this.minMaxStack.length) {
        const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
        newMinMax.min = Math.min(lastMinMax.min, number);
        newMinMax.max = Math.max(lastMinMax.max, number);
      }
      this.minMaxStack.push(newMinMax);
      this.stack.push(number);
    }
  
    // O(1) time | O(1) space
    getMin() {
      return this.minMaxStack[this.minMaxStack.length - 1].min;
    }
  
    // O(1) time | O(1) space
    getMax() {
      return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
  }
  
  const myStack = new MinMaxStack();
  myStack.push(5);
  console.log(myStack.getMax());
  console.log(myStack.getMin());
  console.log(myStack.peek());
  myStack.push(7);
  console.log("should be 5", myStack.getMin());
  console.log("should be 7", myStack.getMax());
  myStack.push(2);
  console.log("should be 2", myStack.getMin());
  console.log("sould be 7", myStack.getMax());
  console.log("sould be 2", myStack.peek());
  console.log("sould be 2", myStack.pop());
  console.log("sould be 5", myStack.getMin());
  console.log("sould be 5", myStack.getMax());
  console.log("sould be 7", myStack.peek());