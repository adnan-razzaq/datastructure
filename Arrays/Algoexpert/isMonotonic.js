/* 
!DESCRIPTION
*/
function isMonotonicFirst(array) {
    // length is less than 3 monotonic
    if (array.length <= 2) return true;

    let direction = array[0] - array[1];

    for (let index = 2; index < array.length; index++) {
        if (direction === 0) {
            direction = array[index - 1] - array[index];
        } else if (direction > 0) {
            // Numbers are decreasing
            if (array[index] > array[index - 1]) return false;
        } else {
            // Numbers are increaing
            if (array[index] < array[index - 1]) return false;
        }
    }
    return true;
}

/* 
!DESCRIPTION
1. Assume entire array is both increasing and decreasing.
2. Run through entire array, check number and previous number if increasing or decreasing.
If increasing, set decreasing to false. // From first assumption
If decreasing, set increasing to false. // From first assumption
3. Array is monotonic is it's either increasing or decreasing.
*/
function isMonotonic(array) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let index = 1; index < array.length; index++) {
        if (array[index] < array[index - 1]) isIncreasing = false;
        if (array[index] > array[index - 1]) isDecreasing = false;
    }

    return isIncreasing || isDecreasing;
}

console.log(isMonotonicFirst([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]));
