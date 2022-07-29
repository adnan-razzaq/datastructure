/**
 * Generate squares
 * Sort the array and return
 * @param  {Numbers} array
 * Time:O(nlogn)
 * Space:O(n)
 */
function sortedSquaredArray(array) {
    // Write your code here.
    let squaredArray = array.map((item) => item * item).sort((a, b) => a - b);
    return squaredArray;
}

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]);

/* 
!DESCRIPTION
1- Maintain two indexes start=0 end=size of array
2- Create a new array of equal size
2- Loop through array in reverse and Compare absolute values of start and end.
3- If end value is large then Calculate the square of bigger value and move it to end of new array and
decrement end.
4- If start value is large then move value at start to end of array and increment start
*/
/**
 * Sorted squares of array
 * Time:O(n)
 * Space:O(n)
 * @param  {Number} array
 */
function sortedSquaredArrayEfficient(array) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;
    let squaredArray = Array(array.length).fill(0);

    for (let i = array.length - 1; i >= 0; i--) {
        if (Math.abs(array[end]) > Math.abs(array[start])) {
            squaredArray[i] = array[end] * array[end];
            end--;
        } else {
            squaredArray[i] = array[start] * array[start];
            start++;
        }
    }
    console.log(squaredArray);
    return squaredArray;
}

sortedSquaredArrayEfficient([-2, -1]);
