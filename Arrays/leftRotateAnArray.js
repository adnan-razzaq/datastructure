/**
 * @param  {} array
 * Accepts an array as parameter
 * left rotate an aray by one
 *
 */
function leftRotateArrayByOne(array) {
  let last = array[0];

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = last;
}

/**
 * @param  {Array[Number]} [array] Array to be rotated
 * @param  {Number} d Number of times to rotate an array
 * Brute force approcah to rotate an array
 * Calling left rotate array d times
 *
 *
 */
function leftRotateAnArrayDtimes(array, d) {
  for (let i = 0; i < d; i++) {
    leftRotateArrayByOne(array);
  }
}
/**
 * @param  {Array[Number]} array
 * @param  {Number} d
 */
function leftRotaAnArrDtimEfficient(array, d) {
  //take slice from array
  let arraySlice = array.slice(0, d);
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + d];
  }

  for (let i = 0; i < arraySlice.length; i++) {
    array[array.length - d + i] = arraySlice[i];
  }
  console.log(array);
}

leftRotaAnArrDtimEfficient([10, 5, 30, 15], 3);
