function balancedBrackets(string) {
  // Write your code here.
  let openingBrackets = "({[";
  let closingBrackets = "]})";
  let stack = [];
  let matchingBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (const char of string) {
    //current char has opening brackets
    if (openingBrackets.includes(char)) stack.push(char);
    // current char has closing brackets
    else if (closingBrackets.includes(char)) {
      //if stack is empty
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}
