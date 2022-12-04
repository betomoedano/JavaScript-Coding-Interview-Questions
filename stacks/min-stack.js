class MinStack {
  constructor() {
    this.elements = [];
    this.mins = [];
    this.min = undefined;
  }

  push(element) {
    this.elements.push(element);
    if (element < this.min || this.min === undefined) {
      this.min = element;
      this.mins.push(element);
    }
  }

  pop() {
    if (this.elements.length > 0) {
      const elementToPop = this.elements.pop();
      if (elementToPop === this.min) {
        this.mins.pop();
        this.min = this.mins[this.mins.length - 1];
      }
      return elementToPop;
    }
  }
}

const myMinStack = new MinStack();

myMinStack.push(3);
myMinStack.push(4);
myMinStack.push(5);
myMinStack.push(1);
myMinStack.push(-100);
console.log(myMinStack.min);
