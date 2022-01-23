// find maxmium length of even odd subarray that has alternating even odd elemnts.
// A subarray means contiguos

const MaxSubArray = (array) => {
  //traverse through each subarray
  // check for the remainder of current and previous values and update the current
  // find the max from current and max
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    let current = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (
        (array[j] % 2 === 0 && array[j - 1] % 2 !== 0) ||
        (array[j] % 2 !== 0 && array[j - 1] % 2 === 0)
      ) {
        current++;
      } else {
        break;
      }
    }
    result = Math.max(current, result);
  }
  console.log(result);
};

//An efficient approach based on kadanas algorithm
const MaxSubArrayEff = (array) => {
  let current = 1;
  let result = 1;
  for (let i = 1; i < array.length; i++) {
    if (
      (array[i] % 2 === 0 && array[i - 1] % 2 !== 0) ||
      (array[i] % 2 !== 0 && array[i - 1] % 2 === 0)
    ) {
      current++;
    } else {
      current = 1;
    }
  }
  result = Math.max(current, result);
  console.log(result);
  return result;
};

MaxSubArrayEff([10, 12, 14, 7, 8]); //3
MaxSubArrayEff([7, 10, 13, 14]); //4
MaxSubArrayEff([10, 12, 8, 4]); //1
