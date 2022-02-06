/* Naive approach
Time:O(n^2) Space: O(1)
*/
function firstDuplicateValue(array) {
  // Write your code here.
  let smallestIndex = Infinity;
  if (array.length < 2) return -1;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //if elemnts are equal then compare with smallestindex
      if (array[i] === array[j]) {
        if (j < smallestIndex) {
          smallestIndex = j;
        }
      }
    }
  }
  if (smallestIndex === Infinity) return -1;
  return smallestIndex >= 0 ? array[smallestIndex] : -1;
}

//Time:O(n) Space: O(n)
function firstDuplicateValueEff(array) {
  const obj = {};
  for (const value of array) {
    if (value in obj) {
      return value;
    }
    obj[value] = true;
  }
  return -1;
}

console.log(firstDuplicateValueEff([2, 1, 5, 3, 3, 2, 4]));
