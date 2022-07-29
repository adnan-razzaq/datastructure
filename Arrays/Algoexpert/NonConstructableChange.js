/* 
! DESCRIPTION A GREEDY APPROACH
1-Check if the array is of length 0
2-If yes then return 1 because the minimum change that can't be made

If No
3-First sort array of coins in ascending order 
4-initialize a minChange variable to 0
5-Loop through the array 
6-Check if the next index value is greater then minChange + 1 
If yes then that's the minimum change that the array can't make
If no then add the value of index in the minChange

*/
function nonConstructibleChange(coins) {
    // Write your code here.
    if (!coins.length) return 1;

    let currentChange = 0;
    coins.sort((a, b) => a - b);
    for (const coin of coins) {
        if (coin > currentChange + 1) return currentChange + 1;

        currentChange += coin;
    }
    return currentChange + 1;
}
