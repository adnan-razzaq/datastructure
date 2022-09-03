/* 
Maximum Sum of K Consecutive elements
!DESCRIPTION
1 Keep track of maximum sum.
2 Loop through each element until i+k-1.
3 Loop through each until k.
4 Check for each current sum whether it is greater than max sum.
5 return max sum

Time: O(n^2)
 */

function MaximumSum(array, k) {
    let result = -Infinity;

    for (let i = 0; i + k - 1 < array.length; i++) {
        let current = 0;

        for (let j = 0; j < k; j++) {
            current = current + array[i + j];
        }
        result = Math.max(current, result);
    }
    return result;
}

MaximumSum([1, 8, 30, -5, 20, 7], 3);

/* 
!DESCRIPTION
1 Approach using sliding window technique.
2-Compute sum of current Window or subarray using sum of previous window.
3 current =current+last of current window-first of previous window
*/

function MaxSumEff(array, k) {
    let current = 0;
    // Calculate the initial sum before moving window
    for (let i = 0; i < k; i++) {
        current = current + array[i];
    }
    let maxSum = current;

    //Slide the window.
    for (let i = k; i < array.length; i++) {
        current = current + array[i] - array[i - k];
        maxSum = Math.max(current, maxSum);
    }
    console.log(maxSum);
}

MaxSumEff([1, 8, 30, -5, 20, 7], 3);
