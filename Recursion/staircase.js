// Time O(n^2)
// Space O(n)
function numberOfWays(height, maxstep) {
    //base case
    if (height <= 1) return 1;

    //recursive call

    let numberofways = 0;
    for (let i = 1; i <= Math.min(height, maxstep); i++) {
        numberofways += numberOfWays(height - i, maxstep);
    }
    return numberofways;
}

console.log(numberOfWays(4, 3));

//Solution 2
// use memoization

function memoizeNumberofWays(height, maxSteps) {
    const memoize = { 0: 1, 1: 1 };

    if (height in memoize) return memoize[height];

    let ways = 0;
    for (let i = 1; i <= Math.min(height, maxSteps); i++) {
        ways += memoizeNumberofWays(height - i, maxSteps);
    }
    memoize[height] = ways;

    return ways;
}

console.log(memoizeNumberofWays(4, 3));
