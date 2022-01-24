const { firstOccurance } = require("./IndexOfFirstOccurance.js");
function search(array) {
  let number = Number.parseInt(1);
  let first = firstOccurance(array, number);
  if (first === -1) return 0;
  else {
    let total = array.length - first;
    console.log(total);
    return total;
  }
}

search([0, 0, 0, 1, 1, 1, 1]);
search([1, 1, 1, 1, 1]);
search[(0, 0, 0, 0)];
