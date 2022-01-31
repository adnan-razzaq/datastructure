/* Check if paranthesis are baanced or not */
function search(str) {
  let stack = [];

  //loop through each string if opening brackets are there than push it in stack
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "{" || str[i] === "(") {
      stack.push(str[i]);
    } else if (
      //check for closing brackets in strings and compare with top of stack if same then pop
      (str[i] === "]" && stack[stack.length - 1] === "[") ||
      (str[i] === "}" && stack[stack.length - 1] === "{") ||
      (str[i] === ")" && stack[stack.length - 1] === "(")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  //check for empty stack
  return stack.length > 0 ? false : true;
}

console.log(search("([])"));
console.log(search("((())"));
console.log(search("([)]"));
console.log(search("{}([()])"));
console.log(search("((())"));
