/**
 * @param  {} array
 * An efficient approach approach
 */
//The rain water cannot be stored at corners
// First we will calculate the lmax and rmax for each element
// To find the amount of water that can be stored we have to get minimum value from lmin and lmax for current value and add it to total
const trapRainWater = (array) => {
  let total = 0;
  let lmax = [];
  let rmax = [];
  //find lmax for each of elements
  lmax[0] = array[0];

  for (let i = 1; i < array.length; i++) {
    lmax[i] = Math.max(array[i], lmax[i - 1]);
  }

  //find the right max elements for each element

  rmax[array.length - 1] = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    rmax[i] = Math.max(array[i], rmax[i + 1]);
  }
  // total water that can be stored
  for (let i = 1; i < array.length - 1; i++) {
    let value = Math.min(lmax[i], rmax[i]) - array[i];
    total = total + value;
  }
  console.log(total);
  return total;
};

trapRainWater([2, 0, 2]);
trapRainWater([3, 0, 1, 2, 5]);
trapRainWater([1, 2, 3]);
trapRainWater([3, 2, 1]);
trapRainWater([1, 2, 3]);
trapRainWater([3, 5, 2, 3]);
trapRainWater([5, 0, 6, 2, 3]);
