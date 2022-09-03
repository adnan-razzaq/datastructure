/* Find if there exists a subarray with given sum */
/* 
!DESCRIPTION
1 Use 2 for loops.
2 Keep track of current sum.
3 id current sum is equal to given sum return true
4 else return false
*/

function SubArray(array, sum) {
    for (let i = 0; i < array.length; i++) {
        let current = 0;

        for (let j = i; j < array.length; j++) {
            current = current + array[j];
            if (current === sum) return true;
        }
    }
    return false;
}

console.log(SubArray([1, 4, 20, 3, 10, 5], 33));

/* Efficient approach sliding window technique
!DESCRIPTION
1 Use a sliding window technique with variable size.
2 Maintain the start and end point of the window.
3 while current sum is smaller than given sum then extend the window by
increasing end.
4 while current sum is greater than given sum then shrink the window by
increasing start.

*/

function efficientSubArray(array, sum) {
    let start = 0;

    let current = 0;
    for (let end = 0; end < array.length; end++) {
        current = current + array[end];

        while (current > sum) {
            current = current - array[start];
            start++;
        }

        if (current === sum) {
            return true;
        }
    }
    return false;
}

efficientSubArray([4, 8, 12, 5], 17);
