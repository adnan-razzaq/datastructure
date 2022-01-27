/* Find repeating elment in O(n) with no chnage in original array
Time complexity should be big O(n) and space complexity should be
O(1)
*/

/* First approach
two loops sort through each element one by one
Time complexity is O(n^2)
 */

function search(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        console.log("Found element");
        console.log(array[i]);
        return array[i];
      }
    }
  }
  return -1;
}

/* 2nd approach Time Complexity nlogn
The apprach is sort array first then traverse through each
*/

function searchReapeating(array) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      console.log(array[i]);
      return array[i];
    }
  }
  return -1;
}

/* 3rd approach
==>The idea is to make a boolean array of equal size and if its already
true then we return it as repeated
=> Time complexity O(n) and space complexity is also big O(n)
*/
function searchRepeatingEff(array) {
  const copy = Array(array.length).fill(false);

  for (let i = 0; i < array.length; i++) {
    if (copy[array[i]]) {
      console.log(array[i]);
      return array[i];
    }
    copy[array[i]] = true;
  }
}

searchRepeatingEff([0, 2, 1, 3, 2, 2]);
searchRepeatingEff([1, 2, 3, 0, 3, 4, 5]);
searchRepeatingEff([0, 0]);

searchReapeating([0, 2, 1, 3, 2, 2]);
searchReapeating([1, 2, 3, 0, 3, 4, 5]);
searchReapeating([0, 0]);

search([0, 2, 1, 3, 2, 2]);
search([1, 2, 3, 0, 3, 4, 5]);
search([0, 0]);
