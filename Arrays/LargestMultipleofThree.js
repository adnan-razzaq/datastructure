// Time: O(nlogn)
// Space: O(n)
const MaxNumber = (array) => {
  // get sum of all numbers
  const sum = array.reduce((total, current) => total + current);
  if (sum === 0) return 0;

  const remainder = sum % 3;

  array.sort((a, b) => b - a);

  if (remainder === 0) return Number.parseInt(array.join(""));

  // get the indexes where remainder is not zero
  let arrayRemainderOne = [];
  let arrayRemainderTwo = [];

  array.forEach((element, index) => {
    if (element % 3 === 1) arrayRemainderOne.push(index);
    if (element % 3 === 2) arrayRemainderTwo.push(index);
  });

  //remainder is 1
  if (remainder === 1) {
    //remove smaller number with 1 remainder if exists
    if (arrayRemainderOne.length > 0) {
      let lastIndex = arrayRemainderOne.pop();
      array[lastIndex] = "";
    } else if (arrayRemainderTwo.length !== 0) {
      //remove 2 numbers with remainder 2
      let lastIndex = arrayRemainderTwo.pop();
      let secondLastIndex = arrayRemainderTwo.pop();
      array[lastIndex] = "";
      array[secondLastIndex] = "";
    } else {
      return -1;
    }
    //remainder is 2
  } else {
    if (arrayRemainderTwo.length > 0) {
      let lastIndex = arrayRemainderTwo.pop();
      array[lastIndex] = "";
    } else if (arrayRemainderTwo.length === 0) {
      //remove 2 numbers with remainder 2
      let lastIndex = arrayRemainderOne.pop();
      let secondLastIndex = arrayRemainderOne.pop();
      array[lastIndex] = "";
      array[secondLastIndex] = "";
    } else {
      return -1;
    }
  }

  // return sring and parse it to int
  return Number.parseInt(array.join(""));
};

let result = MaxNumber([3, 4, 2, 1]);
let result2 = MaxNumber([4, 9, 2]);
let result3 = MaxNumber([1, 1, 1, 2]);
let result4 = MaxNumber([0]);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

module.exports = MaxNumber;
