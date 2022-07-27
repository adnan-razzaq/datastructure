/**
 * Time:O(n^2)
 * @param  {Number} array
 * @param  {Number} targetSum
 *
 * The approach is to use for two loops
 */
function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) return [array[i], array[j]];
        }
    }
    return [];
}
/**
 * Time:O(n)
 * Space:O(n)
 * @param  {Number} array
 * @param  {Number} targetSum
 * The approach is to use hashed table and see whether potential match is
 * already available in object
 */
function twoNumberSumHashed(array, targetSum) {
    const objects = {};

    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in objects) {
            return [potentialMatch, num];
        } else {
            objects[num] = num;
        }
    }
    return [];
}
/**
 * Sort the array
 * Use two pointers high and low
 * Compare sum of values at high and low with targetSum
 * Time(O(n))
 * @param  {} array
 * @param  {} targetSum
 */
function TwoNumberSumPointer(array, targetSum) {
    //sort array
    array.sort((a, b) => a - b);
    // Maintain two indexes
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
        let currentSum = array[low] + array[high];
        if (currentSum === targetSum) {
            return [array[low], array[high]];
        } else if (currentSum < targetSum) {
            low++;
        } else {
            high--;
        }
    }
    return [];
}
