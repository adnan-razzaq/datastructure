function sum(num) {
    // n/10 removes last digit
    // n%10 gives last digit

    //base case
    if (num === 0) return 0;

    //recursive call
    return sum(Math.trunc(num / 10)) + (num % 10);
}

console.log(sum(2345));
