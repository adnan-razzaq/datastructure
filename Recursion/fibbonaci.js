/* The time complexity of this approach is 2^n */
function fibbonaci(n) {
    //base case
    if (n === 1) return 0;

    if (n === 2) return 1;

    //recursive call
    return fibbonaci(n - 1) + fibbonaci(n - 2);
}

console.log(fibbonaci(5));

/* The approach can be improved using memoization and storing
values in hash table
*/

function fibMemoize(num) {
    const memo = { 1: 0, 2: 1 };

    if (num in memo) {
        return memo[num];
    } else {
        memo[num] = fibMemoize(num - 1) + fibMemoize(num - 2);
    }
    return memo[num];
}

console.log(fibMemoize(5));

/* Iterative solution */

function fibIterative(num) {
    let array = [0, 1];

    for (let i = 2; i <= num; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    console.log(array);
}
fibIterative(5);
