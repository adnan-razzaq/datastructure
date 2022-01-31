/* Find longest Subarray with given sum  */

function search(array, sum) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let current = 0;
    for (let j = i; j < array.length; j++) {
      current = current + array[j];
      if (current === sum) {
        result = Math.max(result, j - i + 1);
      }
    }
  }
  let a = "a";
  console.log(a.charCodeAt(a));
  console.log(result);
}

search([5, 8, -4, -4, 9, -2, 2], 0);
