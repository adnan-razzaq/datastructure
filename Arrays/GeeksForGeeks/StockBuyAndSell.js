/* 
!DESCRIPTION
1 The idea here is to find bottom points and find peak points.
2 Initialize the profit as zero.
3 Loop through element from index 1.
4 If element[i]>element[i-1] then profit=profit+(array[i]-array[i-1]) 
*/
function BuyAndSell(array) {
    let profit = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            profit = profit + array[i] - array[i - 1];
        }
    }
    console.log(profit);
    return profit;
}

BuyAndSell([1, 5, 3, 8, 12]);
BuyAndSell([30, 20, 10]);
BuyAndSell([10, 20, 30]);
BuyAndSell([1, 5, 3, 1, 2, 8]);
