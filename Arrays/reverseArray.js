/**
 * Reverses an array by replacing the indexes
 * @param  {Number} array - Array of Numbers
 *
 */

// Maintain two indexes low and high and swap the values
function reverse(array) {
    let low = 0,
        high = array.length - 1;
    while (low < high) {
        let temp = array[low];
        array[low] = array[high];
        array[high] = temp;
        low++;
        high--;
    }
    return array;
}

console.log(reverse([1, 2, 3, 4, 5]));
