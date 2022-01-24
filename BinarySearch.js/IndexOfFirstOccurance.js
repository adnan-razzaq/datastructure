// A naive approach to find the solution
const search = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

//An efficient approach using Binary search
const searchEff = (array, element) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] > element) {
      high = mid - 1;
    } else if (array[mid] < element) {
      low = mid + 1;
    } else {
      //check if mid is 0
      //check if previous value from mid is not same
      if (mid === 0 || array[mid] !== array[mid - 1]) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

searchEff([1, 10, 10, 10, 20, 20, 40], 20);
searchEff([10, 20, 30], 15);
searchEff([15, 15, 15], 15);

module.exports = { firstOccurance: searchEff };
