/**
 * Removes Duplicates from sorted array of numbers
 * Naive approach is to use a auxiliary array and move different elements to array
 * Time O(N)
 * Space O(N)
 * @param  {Number} array
 */
function RemoveDuplicates(array) {
    let tempArray = [];
    tempArray[0] = array[0];

    let res = 1;
    for (let index = 1; index < array.length; index++) {
        if (array[index] !== array[res - 1]) {
            tempArray[res] = array[index];
            res++;
        }
    }
    return tempArray;
}

console.log(RemoveDuplicates([10, 20, 30, 30, 40]));

/* 
!APPROACH
1 Initialize the result=1.
2 Loop over the array and compare the current with previous and then update
if numbers are not equal.
3 Increment the result
4 return the array
*/
function EfficientRemoveDuplicates(array) {
    let result = 1;
    for (let index = 1; index < array.length; index++) {
        if (array[index] !== array[result - 1]) {
            array[result] = array[index];
            result++;
        }
    }
    return array;
}

EfficientRemoveDuplicates([10, 20, 30, 30, 40]);
