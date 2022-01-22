// Given a binary array. Find maximum consecutive 1s in it
/**
 * @param  {} array
 * A naive approach for finding two consecutive1s .Time complexity is n^2.
 *
 */
function Consective1s(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = i; j < array.length; j++) {
      if (array[j] === 1) count++;
      else break;
    }
    result = Math.max(result, count);
  }
  console.log(result);
  return result;
}

/* An efficient approach to find consecutive1s
   An idea is to whenevr you find a value which is 0 set current to zero

*/
function ConsecEff(array) {
  let result = 0;
  let current = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      current = 0;
    } else {
      current++;
      result = Math.max(result, current);
    }
  }
  console.log(result);
  return result;
}

ConsecEff([0, 1, 1, 0, 1, 0]);
ConsecEff([1, 1, 1, 1]);
ConsecEff([0, 0, 0]);
ConsecEff([1, 0, 1, 1, 1, 1, 0, 1, 1]);

Consective1s([0, 1, 1, 0, 1, 0]);
Consective1s([1, 1, 1, 1]);
Consective1s([0, 0, 0]);
Consective1s([1, 0, 1, 1, 1, 1, 0, 1, 1]);
