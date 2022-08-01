/* Writeafunction that returns the maximum possible total speed or the minimum
possible total speed of all of the tandem bicycles being ridden based on an input
parameter,fastest.If fastest=true,your function should return the
maximum possible total speed;otherwise it should return the minimum total speed.
"Total speed"is defined as the sum of the speeds of all the tandem bicycles being
ridden.For example,if there are4riders(2red-shirt riders and2blue-shirt riders)who
have speeds of1,3,4,5,and if they're paired on tandem bicycles as follows:
 [1,4],[5,3],then the total speed of these tandem bicycles is4+5=9.
*/

/* 
!DESCRIPTION
1 Use Greedy approach
2 Sort both arrays one in ascending order and one in descending order
3 If fastest is true then make pair from both arrays. Take smallest from 
one and largest from other and return Max from it.
4 Add it to totalSpeed.
5 If fastest is false then both arrays should be sorted in one way.
Make pairs and return max from it
*/
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    //sort arrays
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);

    let totalTendemSpeed = 0;

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        if (fastest === true) {
            let currentFast = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
            totalTendemSpeed += currentFast;
        } else {
            blueShirtSpeeds.sort((a, b) => a - b);

            let currentSlow = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
            totalTendemSpeed += currentSlow;
        }
    }

    return totalTendemSpeed;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    //sort arrays
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);

    let totalSpeed = 0;

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        if (fastest === true) {
            let currentFast = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
            totalSpeed += currentFast;
        } else {
            let currentSlow = Math.max(
                redShirtSpeeds[i],
                blueShirtSpeeds[blueShirtSpeeds.length - 1 - i]
            );
            totalSpeed += currentSlow;
        }
    }

    return totalSpeed;
}
tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false);
