/* 
Pair with given sum in unsorted array
*Naive Approach would be to loop through each element.Time complexity would be n^2

*/

//Efficient Approach

function search(array, sum) {
  const set = new Set();
  for (const element of array) {
    if (set.has(sum - element)) {
      console.log("found");
      return true;
    } else {
      set.add(element);
    }
  }
  return false;
}

console.log(search([8, 3, 4, 2, 5], 6));
