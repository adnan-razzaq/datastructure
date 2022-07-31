/* Write  a function that takes in a sorted array of integers as well as  a target integer.The
function should use the Binary Search algorithm to determine if the target integer is
contained in the array and should return its index if it is,otherwise -1
If you're unfamiliar with Binary Search,we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

sample input
  array=[0,1,21,33,45,45,61,71,72,73]
  target=33
Sample Output
  3
*/

function binarySearch(array, target) {
    // Write your code here.
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        //search
        if (array[mid] === target) return mid;

        if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
