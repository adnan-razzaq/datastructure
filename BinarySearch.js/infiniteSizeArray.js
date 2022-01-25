//A naive based solution to search for an element in array
//Time complexity is O(position)
/* 
The idea is to use a while loop while number of iteratons
are not known in advance.  Compare with each elemnt if you
find the element return index of elemnt. Otherwise return
-1
 */
const search = (array, element) => {
  let i = 0;
  while (true) {
    if (array[i] === element) {
      console.log(i);
      return i;
    }
    if (array[i] > element) {
      console.log(-1);
      return -1;
    }
    i++;
  }
};

/* 
The idea is to find the elemnt by using binary search.
We will increment index i*2 times and then compare the
elemnt at index with the elemnt to be found and used binary
search.
*/

const { binarySearch } = require("./RecursiveApproach");

const searchEff = (array, element) => {
  //handle case for index 0

  if (array[0] === element) return 0;

  let i = 1;

  while (array[i] < element) {
    i = i * 2;
  }
  if (array[i] === element) {
    return i;
  }

  let index = binarySearch(array, Math.floor(i / 2) + 1, i - 1, element);
  return index;
};

console.log(searchEff([1, 10, 15, 20, 40, 80, 90, 100, 400, 600], 100));

console.log(searchEff([20, 40, 100, 300], 50));
