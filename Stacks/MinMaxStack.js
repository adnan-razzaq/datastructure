class MinMaxStack {
  constructor() {
    this.stack = [];
    this.MinMaxStack = [];
  }
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    this.MinMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    let newMinMax = { min: number, max: number };
    //if MinMaxStack have already values then compare it with current
    if (this.MinMaxStack.length) {
      let currentMin = this.MinMaxStack[this.MinMaxStack.length - 1];
      newMinMax.min = Math.min(newMinMax.min, currentMin.min);
      newMinMax.max = Math.max(newMinMax.max, currentMin.max);
    }
    this.MinMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.MinMaxStack[this.MinMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.MinMaxStack[this.MinMaxStack.length - 1].max;
  }
}
