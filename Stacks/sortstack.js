/* Sort stack recursively. Use only pop and push methods */

function sortStack(stack) {
  // Write your code here
  if (stack.length === 0) return stack;

  let top = stack.pop();

  insertStack(stack, top);
  return stack;
}

function insertStack(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element);
    return;
  }
  let top = stack.pop();
  insertStack(stack, top);
  stack.push(top);
}
