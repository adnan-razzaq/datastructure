// find maximum length of even odd subarray that has alternating even odd elements.
// A subarray means contiguous elements

/* 
!DESCRIPTION
 1-traverse through each subarray
 2- check for the remainder of current and previous values and update the current
 3-find the max from current and max
*/
const MaxSubArray = (array) => {
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
/* 
!DESCRIPTION
1 Initialize the current and result as 1.
2 We began from index 1.
3 We have two cases : Begin the new subarray Or extend the previous current.
4 Extend when current element is alternating.
5 return max(current,result)
*/
const MaxSubArrayEff = (array) => {
    let current = 1;
    let result = 1;
    for (let i = 1; i < array.length; i++) {
        if (
            (array[i] % 2 === 0 && array[i - 1] % 2 !== 0) ||
            (array[i] % 2 !== 0 && array[i - 1] % 2 === 0)
        ) {
            // extend previous
            current++;
        } else {
            // begin new
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
