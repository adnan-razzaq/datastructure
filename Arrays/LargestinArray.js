/* 
Naive Approach
!Description
1 Use two for loops.
2 keep track of largest using bool value.
3 Loop through array and compare each value with other.
4 If you find a value that is greater than current value. Break the loop
and set largest to false.
5 if you do not find any value that is largest then current value.
6 Then current value is largest and return the index.
// Time:O(n^2) Space O(1)
*/

function NaiveApproachLargest(array) {
    for (let i = 0; i < array.length; i++) {
        let largest = true;

        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                largest = false;
                break;
            }
        }
        if (largest === true) return i;
    }

    return -1;
}

/* 
!Efficient Approach
1 Use 1 for loop.
2 Keep track of largestIndex and currentLargest Value
3 Loop through each element and compare with other element.
4 if current element is greater than currentLargest and currentLargestIndex 
5 Then update the currentLargest and currentLargestIndex.
6 return currentLargestIndex
// Time:O(n) Space O(1)
*/
function largest(array) {
    let large = array[0];
    let largeIndex = 0;

    for (let index = 1; index < array.length; index++) {
        if (array[index] > large) {
            large = array[index];
            largeIndex = index;
        }
    }
    return largeIndex;
}

console.log(NaiveApproachLargest([1, 2, 5, 600, 20, 1110, 3, 200]));

module.exports = { largest };
