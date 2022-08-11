/* 
!Min Max Stack Construction
Write a MinMaxStack class foraMin Max Stack.The class should support:
   Pushing and popping values on and off the stack.
   Peeking at the value at the top of the stack.
   Getting both the minimum and the maximum values in the stack at any given
   point in time.
  
All class methods,when considered independently,should run in constant time and
with constant space.

*/

// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor() {
        this.stack = [];
        this.MinMaxStack = [];
    }
    peek() {
        // Write your code here.
        let lastElementIndex = this.stack.length - 1;
        return this.stack[lastElementIndex];
    }

    pop() {
        // Write your code here.
        this.MinMaxStack.pop();
        return this.stack.pop();
    }

    push(number) {
        // Write your code here.

        //for minMaxStack for first element
        let newMinMax = { min: number, max: number };

        // if there already exists element
        if (this.MinMaxStack.length) {
            // Compare newMinMax with oldMinMax
            let lastMinMax = this.MinMaxStack[this.MinMaxStack.length - 1];
            newMinMax.min = Math.min(lastMinMax.min, newMinMax.min);
            newMinMax.max = Math.max(lastMinMax.max, newMinMax.max);
        }

        this.MinMaxStack.push(newMinMax);

        // basic stack
        this.stack.push(number);
    }

    getMin() {
        // Write your code here.
        let lastElementIndex = this.MinMaxStack.length - 1;
        return this.MinMaxStack[lastElementIndex].min;
    }

    getMax() {
        // Write your code here.
        let lastElementIndex = this.MinMaxStack.length - 1;
        return this.MinMaxStack[lastElementIndex].max;
    }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
