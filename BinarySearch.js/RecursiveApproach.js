// A recursive approach for binary search

function search(array, low, high, element) {
  let mid = Math.floor(low + high / 2);

  if (low > high) return -1;

  if (array[mid] === element) return mid;
  else if (element > array[mid]) {
    search(array, mid + 1, high, element);
  } else {
    search(array, low, mid - 1, element);
  }
}

search([20, 30, 40, 50, 60], 0, 4, 40);
