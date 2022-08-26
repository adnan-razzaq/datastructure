/**
 * Reverses an array by replacing the indexes
 * @param  {Number} array - Array of Numbers
 *
 */

/* 
! Description
1  Maintain two indexes low and high and swap the values until low is
smaller than high
2 Return array in end

*/
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
