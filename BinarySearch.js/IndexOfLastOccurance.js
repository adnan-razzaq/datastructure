// A naive based approach
// Idea is to traverse the array from reverse

function search(array, element) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === element) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

//An efficient approach

function searchEff(array, element) {
  let low = 0;
  let high = array.length - 1;
  for (let index = 0; index < array.length; index++) {
    let mid = (low + high) / 2;
    if (array[mid] === element) {
      if (mid === array.length - 1 || array[mid] !== array[mid + 1]) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (array[mid] > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

searchEff([1, 10, 10, 10, 20, 20, 40], 20);
searchEff([10, 20, 30], 15);
searchEff([15, 15, 15], 15);

module.exports = { lastOccurance: searchEff };
