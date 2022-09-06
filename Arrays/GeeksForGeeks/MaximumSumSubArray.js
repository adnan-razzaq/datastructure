/* 
!DESCRIPTION
1 Traverse through all subarray.
2 Initialize the result as array[0]
3 Find the sum of each subarray.
4 Use two for loops.
5 if current sum is greater than maximum then we update the maximum.
*/

const MaxSumSubArray = (array) => {
    let res = array[0];
    for (let i = 0; i < array.length; i++) {
        let current = 0;
        for (let j = i; j < array.length; j++) {
            current = current + array[j];
            res = Math.max(res, current);
        }
    }
    console.log(res);
};

// An efficent approach using Kadanas algorithm
// Either extend the previous maximum or take the current element.

const MaxSumSubArrayEff = (array) => {
    let result = array[0];
    let maxEnding = array[0];

    for (let i = 1; i < array.length; i++) {
        maxEnding = Math.max(maxEnding + array[i], array[i]);
        result = Math.max(maxEnding, result);
    }
    console.log(result);
    return result;
};

MaxSumSubArrayEff([2, 3, -8, 7, -1, 2, 3]);
MaxSumSubArrayEff([1, -2, 3, -1, 2]);
