/**
 * Moves zeros to end of Array
 * The approach is to traverse through each element and find first zero element
 * Then move right to first zero element and find non zero element and swap them
 * @param  {Number} array
 */
function MoveZerostoEnd(array) {
    for (let index = 0; index < array.length; index++) {
        // find first zero element
        if (array[index] === 0) {
            for (let j = index + 1; j < array.length; j++) {
                // find first non-zero element to the right
                if (array[j] !== 0) {
                    // swap the values
                    let temp = array[index];
                    array[index] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}

console.log(MoveZerostoEnd([8, 5, 0, 10, 20, 0, 2]));
console.log(MoveZerostoEnd([0, 0, 0, 0, 10, 0, 0]));
/**
 * Keep track of non-zero elements and look for them in array
 * @param  {} array
 */
function EfficientMoveZerosToEnd(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== 0) {
            let temp = array[result];
            array[result] = array[index];
            array[index] = temp;
            result++;
        }
    }
    return array;
}

console.log(EfficientMoveZerosToEnd([8, 5, 0, 10, 20, 0, 2]));
console.log(EfficientMoveZerosToEnd([0, 0, 0, 0, 10, 0, 0]));
