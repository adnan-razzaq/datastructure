/* Find maximum in all subarrays of size k */

// Naive based approach
function search(array, k) {
  const s = array.length - k + 1;
  for (let i = 0; i < s; i++) {
    let a = array.slice(i, k);
    console.log(Math.max(...a));
    k++;
  }
}

search([10, 8, 5, 12, 15, 7, 6], 3);
search([20, 5, 3, 8, 6, 15], 4);
