// A recursive approach for binary search

function search(array, low, high, element) {
  let mid = Math.floor(low + high / 2);

  if (low > high) return -1;

  if (array[mid] === element) return mid;
  else if (array[mid] > element) {
    return search(array, low, high - 1, element);
  } else {
    return search(array, mid + 1, high, element);
  }
}

search([20, 30, 40, 50, 60], 0, 4, 40);

module.exports = { binarySearch: search };
