// Maximum Difference Problem with order
/**
 * @param  {} array
 *  A function to getthe maxmium difference from an array array[j]-array[i] where j>i
 * A brute force approach
 * 
 * Approach
 * 1 Intilaize the maxDifference as array[1]-array[0]
 * 2 Loop through each element and compare with maxDifference.
 */
const MaxDifference = (array) => {
  let diff = array[1] - array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let result = array[j] - array[i];

      if (result > diff) {
        diff = result;
      }
    }
  }
  console.log(diff);
  return diff;
};

//An Efficient approach to calcualte  maximum difference
/* 
!Description
1 Initialize the maxDifference as array[1] -array[0]
2 Keep track of minValue. Initialize minValue with value at index 0
3 Loop through each element and and calcute the newDiffrence.
4 maxDiffernce=Math.max(maxDifference,newDifference)
5 MinValue=Math.min(minValue, array[i])
6 return maxDifference
*/
const MaxDifferenceEff = (array) => {
  let max = array[1] - array[0];
  let minVal = array[0];

  for (let j = 1; j < array.length; j++) {
    max = Math.max(max, array[j] - minVal);
    minVal = Math.min(minVal, array[j]);
  }
  console.log(max);
};

MaxDifferenceEff([2, 3, 10, 6, 4, 8, 1]);
MaxDifferenceEff([7, 9, 5, 6, 3, 2]);
MaxDifferenceEff([10, 20, 30]);
MaxDifferenceEff([30, 10, 8, 2]);
