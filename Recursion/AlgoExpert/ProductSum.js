/* 
Product sum
Write a function that takes ina"special"array and returns its product sum.
A"special"array is a non-empty array that contains either integers or other"special"
arrays.The product sum ofa"special"array is the sum of its elements,where"special"
arrays inside it are summed themselves and then multiplied by their level of depth. 
[[[]]]is3.
Therefore,the product sum of[x,y]isx+y;the product sum of
[x,[y,z]]isx+2⋆(y+z);the product sum of[x,[y,[z]]]is
x+2*(y+3z).
Sample Input
 array=[5,2,[7,-1],3,[6,[-13,8],4]]
*/

/* 
!DESCRIPTION:
1 Declare a global variable ad initialize its value to 0.
2 Loop through each element and check whether its a number or not.
3 If it is a number then add it to global sum.
4 else it is an array then call the function recursively and increase the multipler by 1.
5 Add the recursive call result to total sum.
6 return sum * multipler

Time: O(n)
Space:O(Depth)
*/
function productSum(array, multiplier = 1) {
    // Write your code here.
    let sum = 0;

    for (const item of array) {
        if (typeof item === "number") {
            sum = sum + item; //5+2
        } else {
            sum = sum + productSum(item, multiplier + 1);
        }
    }
    return sum * multiplier;
}

/* 
! Description 
1 Same logic as above with reduce function
*/

function productSum(array, depth = 1) {
    // Write your code here.

    let sum = array.reduce((previous, current) => {
        if (typeof current === "number") {
            return previous + current;
        } else {
            return previous + productSum(current, depth + 1);
        }
    }, 0);

    return depth * sum;
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
