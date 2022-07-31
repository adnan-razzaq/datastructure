/* 
Shifted Binary Search★
Write a function that takes in a sorted array of distinct integers as well asatarget
integer.The caveat is that the integers in the array have been shifted by some amount;
in other words,they've been moved to the left or to the right by one or more positions.
For example,[1,2,3,4]might have turned into[3,4,1,2].
The function should use a variation of the Binary Search algorithm to determine if the
target integer is contained in the array and should return its index if it is,otherwise −1.
If you're unfamiliar with Binary Search,we recommend watching the Conceptual
Overview section of the Binary Search question's video explanation before starting to
code.
Sample Input
 array=[45,61,71,72,73,0,1,21,33,37]
 target=33
*/

/* 
!DESCRIPTION:
1 Find which part of array is sorted.
2 Find if target element is in range of sorted part.
3 If yes the explore the sorted part.
4 if no then target is not in sorted part of array.
5 Explore unsorted part of array
*/
function shiftedBinarySearch(array, target) {
    // Write your code here.
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) return mid;

        //find which part of array is sorted
        if (array[mid] > array[low]) {
            //first half of array is sorted

            if (target >= array[low] && target < array[mid]) {
                // target is in specific range of elements
                high = mid - 1;
            } else {
                //target is not in specific range
                low = mid + 1;
            }
        } else {
            //second half of array is sorted
            if (target > array[mid] && target <= array[high]) {
                // target is in specific range of elements
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

shiftedBinarySearch();
