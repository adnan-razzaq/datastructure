//A naive approach to find the totaloccurances in array
function search(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  console.log(count);
  return count;
}

const { firstOccurance } = require("./IndexOfFirstOccurance.js");
const { lastOccurance } = require("./IndexOfLastOccurance.js");

//An efficient approach
//we first find first occurance and then we find last occurance

const searchEff = (array, element) => {
  let first = firstOccurance(array, element);
  if (first === -1) return 0;
  else {
    let last = lastOccurance(array, element);
    let count = last - first + 1;
    console.log(count);
    return count;
  }
};

searchEff([10, 20, 30, 30, 30, 30, 40], 30);
searchEff([10, 10, 10], 10);
searchEff([5, 8, 10], 7);
